import "./assets/css/Hobbies.css";
import React, { useState } from 'react';
function Hobbies(){

const [skills, setSkills] = useState([
    { hobby: 'Reading', editMode: false },
    { hobby: 'Writing', editMode: false },
    { hobby: 'Playing', editMode: false },
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [showAddSkill, setShowAddSkill] = useState(false);

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills((prevSkills) => [
        ...prevSkills,
        { hobby: newSkill, editMode: false },
      ]);
      setNewSkill('');
    }
  };


  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) =>
      prevSkills.filter((_, i) => i !== index)
    );
  };

  const toggleAddSkill = () => {
    setShowAddSkill((prevState) => !prevState);
  };




  const [langs, setLangs] = useState([
    { language: 'Kannada', editMode: false },
    { language: 'English', editMode: false },
    { language: 'Hindi', editMode: false },
  ]);
  const [newLang, setNewLang] = useState('');
  const [showAddLang, setShowAddLang] = useState(false);

  const handleInputChangeL = (e) => {
    setNewLang(e.target.value);
  };

  const handleAddLang = () => {
    if (newLang.trim() !== '') {
      setLangs((prevLangs) => [
        ...prevLangs,
        { language: newLang, editMode: false },
      ]);
      setNewLang('');
    }
  };


  const handleDeleteLang = (index) => {
    setLangs((prevLangs) =>
      prevLangs.filter((_, i) => i !== index)
    );
  };

  const toggleAddLang = () => {
    setShowAddLang((prevState) => !prevState);
  };
  return (
    <section className="sec-hob">
      <article className="hobbies">
        <h1 className="h1-hob">Hobbies</h1>
        {skills.map((skill, index) => (
            
          <div className="box" key={index}>
            <h3 className="h3-hob">{skill.hobby}</h3>
            {skill.editMode ? (
              <div className="edit-skill">
                {/* <input type="text" value={newSkill} onChange={handleInputChange} />
                <button onClick={() => handleEditSkill(index)}>Save</button> */}
              </div>
            ) : (
              <div className="view-skill">
                <i className="fa fa-trash" onClick={() => handleDeleteSkill(index)}></i>
              </div>
              
            )}
          </div>
        ))}

        <button className="add-skill-btn" onClick={toggleAddSkill}>
          Add Skill
        </button>
        {showAddSkill && (
          <div className="add-skill">
            <input type="text" value={newSkill} onChange={handleInputChange} />
            <button onClick={handleAddSkill}>Add</button>
          </div>
        )}
      </article>


      <article  className="lang">
        <h1 className="h1-lang">Language</h1>
      {langs.map((lang, index) => (
            
            <div className="box-l" key={index}>
              <h3 className="h3-lang">{lang.language}</h3>
              {lang.editMode ? (
                <div className="edit-lang">
                  {/* <input type="text" value={newSkill} onChange={handleInputChange} />
                  <button onClick={() => handleEditSkill(index)}>Save</button> */}
                </div>
              ) : (
                <div className="view-lang">
                  <i className="fa fa-trash" onClick={() => handleDeleteLang(index)}></i>
                </div>
                
              )}
            </div>
          ))}
  
          <button className="add-lang-btn" onClick={toggleAddLang}>
            Add language
          </button>
          {showAddLang && (
            <div className="add-lang">
              <input type="text" value={newLang} onChange={handleInputChangeL} />
              <button onClick={handleAddLang}>Add</button>
            </div>
          )}
      </article>
    </section>
    );
}

export default Hobbies;