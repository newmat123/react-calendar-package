import * as React from 'react';

const Calender = () => {
  const greeting = 'Hello Function Component!';
  const [name, setName] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{greeting}</h1>
      <label>Enter your name:
      <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
};
export default Calender;

// use tsup in stead
