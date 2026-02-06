


export default function Display({ cvData }) {
    return (
        <article className="display">
            <header className="cv__header">
                <h1 className="cv__name">{cvData.personalInfo.name}</h1>
                <div className="cv__contact">
                    <span>{cvData.personalInfo.email}</span>
                    <span>•</span>
                    <span>{cvData.personalInfo.phone}</span>
                </div>
            </header>

            <section className="cv__section">
                <h2 className="cv__section-title">Education</h2>
                <div className="cv__section-body">
                    {cvData.education.map((edu, index) => (
                        <div className="cv__item" key={index}>
                            <div className="cv__item-title">{edu.schoolName}</div>
                            <div className="cv__item-meta">
                                {edu.degree} in {edu.fieldOfStudy}
                            </div>
                            <div className="cv__item-meta">Class of {edu.graduationYear}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cv__section">
                <h2 className="cv__section-title">Work Experience</h2>
                <div className="cv__section-body">
                    {cvData.workExperience.map((work, index) => (
                        <div className="cv__item" key={index}>
                            <div className="cv__item-title">{work.position}</div>
                            <div className="cv__item-meta">{work.companyName}</div>
                            <div className="cv__item-meta">{work.startDate} - {work.endDate}</div>
                            <ul className="cv__list">
                                {work.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    )
}
