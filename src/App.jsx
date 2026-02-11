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
                  <FormElements inputLabel="School Name" type="text" />
                  <FormElements inputLabel="Degree" type="text" />
                  <FormElements inputLabel="Field of Study" type="text" />
                  <FormElements inputLabel="Graduation Year" type="number" />
                </Form>
              </Card>
              <Card cardHeading="Work Experience">
                <Form>
                  <FormElements inputLabel="Company Name" type="text" />
                  <FormElements inputLabel="Position" type="text" />
                  <FormElements inputLabel="Start Date" type="date" />
                  <FormElements inputLabel="End Date" type="date" />
                  <FormElements inputLabel="Responsibilities" type="textarea" />
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
