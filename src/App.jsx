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
  
  // Initialize form data with default values from cvData
  const [formData, setFormData] = useState({
    ...cvData,
    education: [],
    workExperience: [],
  });

  // Handlers for updating form data
  const updateInfo = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: e.target.value,
      },
    }))
  }

  // Handlers for education entries
  const updateEducation = (index, field) => (e) => {
    const value = e.target.value
    setFormData((prev) => {
      const updatedEducation = prev.education.map((entry, idx) => (
        idx === index
          ? { ...entry, [field]: value }
          : entry
      ))
      return {
        ...prev,
        education: updatedEducation,
      }
    })
  }

  // Handlers for work experience entries
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          schoolName: "",
          degree: "",
          fieldOfStudy: "",
          graduationYear: "",
        },
      ],
    }))
  }

  // Handler to delete an education entry
  const deleteEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, idx) => idx !== index),
    }))
  }

  // Handler to update work experience entries
  const updateWork = (index, field) => (e) => {
    const value = e.target.value
    setFormData((prev) => {
      const updatedWork = prev.workExperience.map((entry, idx) => (
        idx === index
          ? {
            ...entry,
            [field]: field === "responsibilities"
              ? value.split("\n").filter(Boolean)
              : value,
          }
          : entry
      ))
      return {
        ...prev,
        workExperience: updatedWork,
      }
    })
  }

  // Handler to add a new work experience entry
  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          responsibilities: [],
        },
      ],
    }))
  }

  // Handler to delete a work experience entry
  const deleteWorkExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, idx) => idx !== index),
    }))
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
                <button type="button" className="btn" onClick={addEducation}>
                  Add education
                </button>
                {formData.education.length === 0 ? null : (
                  formData.education.map((edu, index) => (
                    <Form key={index}>
                      <FormElements
                        inputLabel="School Name"
                        type="text"
                        value={edu.schoolName}
                        onChange={updateEducation(index, "schoolName")}
                      />
                      <FormElements
                        inputLabel="Degree"
                        type="text"
                        value={edu.degree}
                        onChange={updateEducation(index, "degree")}
                      />
                      <FormElements
                        inputLabel="Field of Study"
                        type="text"
                        value={edu.fieldOfStudy}
                        onChange={updateEducation(index, "fieldOfStudy")}
                      />
                      <FormElements
                        inputLabel="Graduation Year"
                        type="date"
                        value={edu.graduationYear}
                        onChange={updateEducation(index, "graduationYear")}
                      />
                      <button type="button" className="btn btn--danger" onClick={() => deleteEducation(index)}>
                        Delete education
                      </button>
                    </Form>
                  ))
                )}
              </Card>
              <Card cardHeading="Work Experience">
                <button type="button" className="btn" onClick={addWorkExperience}>
                  Add work experience
                </button>
                {formData.workExperience.length === 0 ? null : (
                  formData.workExperience.map((work, index) => (
                    <Form key={index}>
                      <FormElements
                        inputLabel="Company Name"
                        type="text"
                        value={work.companyName}
                        onChange={updateWork(index, "companyName")}
                      />
                      <FormElements
                        inputLabel="Position"
                        type="text"
                        value={work.position}
                        onChange={updateWork(index, "position")}
                      />
                      <FormElements
                        inputLabel="Start Date"
                        type="date"
                        value={work.startDate}
                        onChange={updateWork(index, "startDate")}
                      />
                      <FormElements
                        inputLabel="End Date"
                        type="date"
                        value={work.endDate}
                        onChange={updateWork(index, "endDate")}
                      />
                      <FormElements
                        inputLabel="Responsibilities"
                        type="textarea"
                        value={work.responsibilities.join("\n")}
                        onChange={updateWork(index, "responsibilities")}
                      />
                      <button
                        type="button"
                        className="btn btn--danger"
                        onClick={() => deleteWorkExperience(index)}
                      >
                        Delete work experience
                      </button>
                    </Form>
                  ))
                )}
              </Card>
            </Section>
          </div>
          <div className="panel panel--preview">
            <Section>
              <Display cvData={formData}></Display>
            </Section>
          </div>
      </div>  
    </>
  )
}

export default App
