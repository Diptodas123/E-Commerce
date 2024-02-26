import styled from "styled-components";

const Contact = () => {

  const { name, email } = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe title="1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900787.7772828054!2d85.81345799601813!3d21.489062671998933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0293cd7d569f5d%3A0x6debdb5d7175daa8!2sQUICK%20MART!5e0!3m2!1sen!2sin!4v1708013874082!5m2!1sen!2sin" width="100%" height="300"
        style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xzbnrvdw" method="POST" className="contact-inputs">
            <input type="text"
              placeholder="username"
              value={name ? name : ""}
              name="username" required
              autoComplete="off" />

            <input type="email"
              placeholder="email"
              name="email"
              value={email ? email : ""}
              required autoComplete="off" />

            <textarea name="message" placeholder="Enter your message" id="" cols="30" rows="10" required autoComplete="off"></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;