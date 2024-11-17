import { useState } from 'preact/hooks';

export default function AttendeeForm() {
  const [attendees, setAttendees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const preference = e.target.preference.value;
    if (name) {
      setAttendees([...attendees, { name, preference }]);
      e.target.reset();
    }
  };

  return (
    <div>
      <form id="attendeeForm" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Preferencia Alimentaria:
          <select name="preference" required>
            <option value="Normal">Normal</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Vegano">Vegano</option>
            <option value="Alergia">Alergia</option>
          </select>
        </label>
        <br />
        <button type="submit">Añadir</button>
      </form>

      <h2>Lista de Asistentes</h2>
      <ul>
        {attendees.map((attendee, index) => (
          <li key={index}>
            {attendee.name} ({attendee.preference})
          </li>
        ))}
      </ul>
    </div>
  );
}
