import ImageGallary from '../Details/ImageGallary.jsx';
import Footer from '../Footer/Footer.jsx';
import Resume from "../Details/Resume_updated.pdf";
import Awards from "../../data/awards.json";
import { useNavigate } from 'react-router-dom';

function AboutMe() {
    const navigate = useNavigate()

    return (
        <div
            className='w-full bg-primary'>
            <section
                className='max-w-[1100px] m-auto bg-primary text-white pt-[clamp(6vh,2rem,12vh)] px-4 pb-[22vh]'
            >
                <div>
                    <button
                    onClick={()=> navigate(-1)}>
                        {"<-- Go Back"}
                    </button>
                </div>

                <h1
                    className='text-slate-100 text-2xl'
                >
                    I have always loved tech
                </h1>


                <div>

                    <p className='py-5'>
                        <strong>
                            Looking for my

                            <a
                                href={Resume}
                                className='pl-1 hover:text-orange-600 hover:underline'
                                key='Resume'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CV
                            </a>
                            ?
                        </strong>
                    </p>


                    <h3 className='pb-3 text-xl'>My quick story</h3>
                    <p className='pb-3 text-sm md:text-xl'>Back in middle school, I used to hang out in the computer lab a lot with the computer teacher. He showed me all kinds of things—how to set up computers, edit images, stuff like that. After I graduated, I went back over the summer to help him get things ready for summer school. </p>

                    <p className='pb-3 text-sm md:text-xl'>One day, a secretary from the main office asked for help getting photos off her digital camera. The computer teacher couldn't figure it out, and honestly, nobody knew how to get the pictures out of the camera's internal storage. I happened to have my own digital camera with an SD card, so I got the idea to move her photos onto my SD card first, then transfer them to one of the lab computers. </p>

                    <p className='pb-3 text-sm md:text-xl'>I told the teacher the photos were safe and moved, and he was shocked—like, he really didn't expect me to solve it that easily. He burned the photos onto a CD and gave them back to her. She was so happy to get them back. </p>

                    <p className='pb-10 text-sm md:text-xl'>That moment really stuck with me. It was the first time I realized how much I enjoyed solving tech problems, and it's honestly what pushed me toward a career in technology. </p>


                    <h3 className='pb-3 text-xl'>As a developer</h3>
                    <p className='pb-10 text-sm md:text-xl'>I try to follow common best practices and keep up with modern techniques in my work. I focus a lot on making my code scalable, easy to maintain, and clear to read. That said, I know I still need to get better at writing documentation. I get a lot of satisfaction from building functions that can be reused in different ways. <br /><br />Every new project feels like a chance to grow and add more tools to my skillset.</p>

                    <h3 className='pb-3 text-xl'>As a person</h3>
                    <p className='pb-10 text-sm md:text-xl'>I'm highly <strong>resourceful</strong>. When I run into a problem I don't know, I make it a point to find the answer—whether that means diving into documentation, researching online, or consulting with a colleague. <strong>I'm committed to constant growth</strong>, and I actively seek out new challenges. I study what others are building and push myself to recreate and improve on those projects using my own skillset.</p>

                    <p className='pb-10 text-sm md:text-xl'>Here are some of the awards that I received while in school:</p>
                    <ImageGallary images={Awards} />

                    <h3 className='pt-10 pb-3 text-xl'>As a colleague</h3>
                    <p className='text-sm md:text-xl'>In group projects, I'm always ready to help whenever I can. I don't necessarily consider myself a leader, but I often end up taking initiative—checking in with teammates, setting up meetings, and making sure everyone stays on track. Back in university, I was usually the first to answer questions on our team Discord. I even remember being on a family trip for my sister's birthday and still jumping in to help my teammates.
                        <br /><br />
                        If you're interested in collaborating, <strong>don't hesitate to reach out</strong>—I'm always up for working together and supporting the team.</p>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutMe