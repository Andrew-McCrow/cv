import { useState } from 'react'
import './styles/App.css'
import Section from './components/Section'
import Header from './components/Header'
import Card from './components/Card'
import Form from './components/Form'
import FormElements from './components/FormElements'
import Display from './components/Display'
import cvData from './cvData'

function App() {
  const [formData, setFormData] = useState(cvData);

  const updateInfo = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: e.target.value,
      },
    }))
  }

  const updateEducation = (field) => (e) => {
    const value = field === "graduationYear" ? Number(e.target.value) : e.target.value
    setFormData((prev) => {
      const updatedEducation = [...prev.education]
      updatedEducation[0] = {
        ...updatedEducation[0],
        [field]: value,
      }
      return {
        ...prev,
        education: updatedEducation,
      }
    })
  }

  const updateWork = (field) => (e) => {
    const value = e.target.value
    setFormData((prev) => {
      const updatedWork = {
        ...prev.workExperience[0],
        [field]: field === "responsibilities"
          ? value.split("\n").filter(Boolean)
          : value,
      }
      return {
        ...prev,
        workExperience: [updatedWork],
      }
    })
  }

  return (
    <>
      <Header />
      <div className="layout">
          <div className="panel panel--form">
            <Section>
              <Card cardHeading="Personal Information">
                <Form>
                  <FormElements 
                    inputLabel="Name" 
                    type="text" 
                    value ={formData.personalInfo.name}
                    onChange={updateInfo("name")} />
                  <FormElements 
                    inputLabel="Email" 
                    type="email" 
                    value={formData.personalInfo.email}
                    onChange={updateInfo("email")} />
                  <FormElements 
                    inputLabel="Phone Number" 
                    type="text" 
                    value={formData.personalInfo.phone}
                    onChange={updateInfo("phone")} />
                </Form>
              </Card>
              <Card cardHeading="Education">
                <Form>
                  <FormElements
                    inputLabel="School Name"
                    type="text"
                    value={formData.education[0].schoolName}
                    onChange={updateEducation("schoolName")}
                  />
                  <FormElements
                    inputLabel="Degree"
                    type="text"
                    value={formData.education[0].degree}
                    onChange={updateEducation("degree")}
                  />
                  <FormElements
                    inputLabel="Field of Study"
                    type="text"
                    value={formData.education[0].fieldOfStudy}
                    onChange={updateEducation("fieldOfStudy")}
                  />
                  <FormElements
                    inputLabel="Graduation Year"
                    type="number"
                    value={formData.education[0].graduationYear}
                    onChange={updateEducation("graduationYear")}
                  />
                </Form>
              </Card>
              <Card cardHeading="Work Experience">
                <Form>
                  <FormElements
                    inputLabel="Company Name"
                    type="text"
                    value={formData.workExperience[0].companyName}
                    onChange={updateWork("companyName")}
                  />
                  <FormElements
                    inputLabel="Position"
                    type="text"
                    value={formData.workExperience[0].position}
                    onChange={updateWork("position")}
                  />
                  <FormElements
                    inputLabel="Start Date"
                    type="date"
                    value={formData.workExperience[0].startDate}
                    onChange={updateWork("startDate")}
                  />
                  <FormElements
                    inputLabel="End Date"
                    type="date"
                    value={formData.workExperience[0].endDate}
                    onChange={updateWork("endDate")}
                  />
                  <FormElements
                    inputLabel="Responsibilities"
                    type="textarea"
                    value={formData.workExperience[0].responsibilities.join("\n")}
                    onChange={updateWork("responsibilities")}
                  />
                </Form>
              </Card>
            </Section>
          </div>
          <div className="panel panel--preview">
            <Section>
              <Display cvData={formData} />
            </Section>
          </div>
      </div>  
    </>
  )
}

export default App
