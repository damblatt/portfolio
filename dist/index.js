const programmingLanguages = ['Bash', 'C', 'C#', 'CSS', 'HTML', 'Javascript', 'Python', 'SQL']

function App()
{
    return (
        <body class="h-max bg-background overflow-x-hidden">
    <div class="w-screen bg-topline h-3"></div>
    <nav id="nav">
      {/* <!-- flex container --> */}
      <div class="container flex flex-col-reverse max-w-none">
        {/* <!-- nav --> */}
        <div class="flex flex-col">
          <a href="index.html" class="pl-3 p-3 text-3xl font-bold text-left text-black bg-nav-selected">About me</a>
          <a href="meineProjekte.html" class="pl-3 p-3 text-3xl font-bold text-left text-black hover:bg-nav-hover">Meine Projekte</a>
          <a href="impressum.html" class="pl-3 p-3 font-bold text-3xl text-left text-black hover:bg-nav-hover">Impressum</a>
        </div>
      </div>
    </nav>
    
    <div class="text-8xl font-bold text-center mt-72 pb-20">About me!</div>
    <section>
      <div class="grid grid-cols-2 px-10 py-20 bg-nav-selected">
        <div class="text-center text-2xl font-bold px-20 m-auto">Mein Name ist Damian Blatt und ich bin leidenschaftlicher Programmierer. <br>Auf dieser Seite findest du alles, was du über mich und meine Arbeit wissen musst.</br></div>
        <div class="">
          <img src="/img/myPicture.png" class="w-2/3 m-auto" alt="Picture of myself" />
        </div>
      </div>
    </section>

    <section>
      <div class="text-center text-lg font-bold my-14">Ich bin 16 Jahre alt und lebe von klein auf in Wil. Im Jahr 2021 habe ich mit der IMS angefangen; nun befinde ich mich schon im zweiten Jahr.</div>
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-24 text-center">
        {/* <!-- Heading --> */}
        <h2 class="text-3xl font-bold text-center">
          Programmier- und Auszeichnungssprachen:
        </h2>

        <div>
          <ul class="flex flex-row gap-4 overflow-y-auto">
            {
                programmingLanguages.map((item) => (
                    <li class="px-2 py-1">
                        [item]
                    </li>
                ))
            }
          </ul>
        </div>

        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-14 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-damian.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </section>
  </body>
    );
}

export default App;