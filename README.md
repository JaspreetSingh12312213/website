# website
<html>
  <head>
    <title>Medical Centre</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div style{background: linear-gradient(blue, yellow);} id="banner">
        <h1>Welcome to Medical Centre</h1>
        <p>Your health is our top priority</p>
      </div>
      <main>
        <h2>BMI Calculator</h2>
        <form onsubmit="calculateBMI(event)">
          <label for="height">Height (cm)</label>
          <input type="number" id="height" name="height" required>
          
          <label for="weight">Weight (kg)</label>
          <input type="number" id="weight" name="weight" required>
          
          <button type="submit">Calculate BMI</button>
        </form>
        
        <div id="result"></div>
      </main>
      
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>General Check-ups</li>
          <li>Dental Care</li>
          <li>Immunizations</li>
          <li>Cardiology</li>
          <li>Neurology</li>
          <li>Psychiatry</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form id="myForm" action="#" method="POST" onsubmit="sendEmail(event)">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Medical Centre. All rights reserved.</p>
    </footer>
    <script src="functions.js"></script>
  </body>
</html>
