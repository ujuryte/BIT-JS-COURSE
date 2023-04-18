import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function Create() {

const [formData, setFormData] = useState({ name: "", surname: "" });

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, balance:0, id: uuidv4() });
};

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({ name: "", surname: "" });
};

return (
    <div className='create mt-5'>
        <h2>Naujo vartotojo sukurimas</h2>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="me-4">Vardas:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      
                </div>
                <div className="mb-3">
                    <label className="me-3">Pavarde:</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}
