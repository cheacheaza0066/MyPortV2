import Nav from "../Components/Nav";

function About() {
  const textStyle = {
    fontFamily: "Lemon, serif",
  };

  return (
    <>
      <Nav />

      <div className="w-screen flex bg-gray-800 flex-col">
        <div
          className="md:mt-64 sm:mt-52 mt-40 text-white text-center"
          style={textStyle}
        >
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-10">
            Hi there!
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            I’m Thanin Pitakpoolsin
          </p>


          {/* About me */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-48">
            <div className="md:ml-8">
              <img
                className="rounded-3xl md:w-full md:ml-24 w-96"
                src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/168428269_3951792324882647_1929099210224564198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGRMIMvqPQd1A1Ocb7i2lnxXKsLPX0HHs5cqws9fQceznCUqflFBqHyiyjcLqRMXXWrtWK-J5SC7z6_waY0B7Qi&_nc_ohc=ZDMAyX7A1ZYAX9wC3K1&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfDR8gTmUKdtEuMNQOuMEOXD_zo6Gya6BeZjXZcT9OXBAg&oe=65C431E9"
                alt=""
              />
            </div>
            <div className="text-sm md:text-base lg:text-lg xl:text-xl mt-6 md:mt-0 ml-10 mr-10 md:ml-36 md:mr-10 text-left">
              <p className="mt-4 md:mt-10">
                I’m a user experience consultant working with teams around the
                world to help create outstanding websites.
              </p>
              <p className="mt-2 md:mt-5">
                I’ve been a developer since I started my career 5 years ago, and
                have always taken a deep interest in making websites the best
                they can be for everyone using them.
              </p>
              <p className="mt-2 md:mt-5">
                Now I design and develop beautiful websites which focus on
                providing the best experience for everyone using them, ensuring
                they are easy for your team to edit while also delivering the
                best experience for your users.
              </p>
            </div>
          </div>



            {/* My Life */}
          <div className="flex justify-between flex-col md:flex-row mt-12">
            <div className="md:w-2/4 md:ml-32 text-sm md:text-base lg:text-lg xl:text-xl mt-6 md:mt-0 ml-10 mr-10 md:mr-32 text-left">
              <h1 className="text-5xl font-semibold">My Life</h1>
              <p className="mt-4 md:mt-5">
                I’ve always loved technology. From a young age, technology has
                interested me. Most children play video games of some kind, from
                tetris to spyro, crash bandicoot to final fantasy, I loved
                playing with computers, but my interest didn’t stop just at
                entertainment.
              </p>
              <p className="mt-4 md:mt-5">
              The more I played, the more I wanted to understand how things worked. If something broke,
               I would take it apart and figure out what had gone wrong, trying to get it back to normal.
              </p>
              <p className="mt-4 md:mt-5">
              I remember taking apart my computer when I was 12, an event which horrified my parents.
              </p>
            </div>
            <div className="md:mr-8">
              <img
                className="rounded-3xl md:w-full md:mr-10 mt-5 ml-10 mr-10"
                src="https://www.datocms-assets.com/38195/1607120988-about-1.png?fm=webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
