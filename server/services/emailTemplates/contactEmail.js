module.exports = ({ name, surname, phoneNumber, email, message }) => {
  return `
  <html>
  <head>
      <style>
        .container{
          font-family: "Nunito", sans-serif;
          font-size: 1.1rem;
          text-align: center;
          display: grid;
          grid-template-columns: max-content;
          justify-content: center;
        }

        .name{
          font-weight: bold;
          text-transform: capitalize;
        }
        .property{
          font-weight: bold;
          text-transform: uppercase;
        }
        li{
          list-style: none;
          font-weight: bold;
        }
     
      </style>
    <!-- Google fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
      rel="stylesheet"
    />
    </head>
      <body>
        <div class="container">
          <h3>Hey Moises!</h3>
          <p><span class="name">${name} ${surname}</span></p>
          <p> left the following message: </p>
          <p>${message}</p>
          <p>His/Her details are as follows: </p>
          <ul>
          <li> Phone: ${phoneNumber}</li>
          <li> Email: ${email}</li>
          </ul>          
          <p>All the best!</p>  
        </div>
      </body>
  `;
};
