
import React from 'react';

const homeStyles = {
  backgroundColor: '#f8f8f8',
  textAlign: 'center',
  padding: '2rem',
};

const titleStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  fontSize: '2rem',
};

const leadStyles = {
  fontSize: '1.2rem',
  marginTop: '1rem',
  padding: '1rem',
  backgroundColor: 'white',
  borderRadius: '8px',
};

const techIntroContent = `
  Welcome to our Tech Exploration Hub, where we dive into the exciting worlds of Python, SQL, and Java.

  Python:
  Python is a versatile, high-level programming language known for its readability and ease of use. It's widely used in web development, data analysis, artificial intelligence, and more. Whether you're a beginner or an experienced developer, Python's simplicity makes it an excellent choice for various applications.

  SQL (Structured Query Language):
  SQL is the language of databases, allowing you to interact with and manage data effectively. Whether you're retrieving information, updating records, or creating complex database structures, SQL is a fundamental skill for anyone involved in data management and analysis.

  Java:
  Java is a powerful, object-oriented programming language that's been a cornerstone of software development for decades. Known for its platform independence, Java applications can run on any device with a Java Virtual Machine (JVM). From mobile apps to enterprise-level systems, Java continues to play a crucial role in the software development landscape.

  As we embark on this technological journey, join us in exploring the nuances of Python's simplicity, SQL's data manipulation capabilities, and Java's robustness. Stay tuned for in-depth tutorials, real-world applications, and hands-on projects that showcase the incredible possibilities these technologies offer.

  Whether you're a curious enthusiast or a seasoned developer, there's always something new to learn and discover in the ever-evolving world of technology.
`;

function Home() {
  return (
    <div style={homeStyles}>
      <h1 style={titleStyles}>
        Welcome to our Tech Exploration
      </h1>
      <p style={leadStyles}>
        {techIntroContent}
      </p>
    </div>
  );
}

export default Home;

