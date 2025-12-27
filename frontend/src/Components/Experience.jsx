import { Book, Briefcase, Calendar,  MapPin,} from 'lucide-react';
import React from 'react'

const Experience = () => {
  return <div id='experience' className='mt-24'>
    <h2 className='text-soft_coal'> Work Experience & Learning Path </h2>
    <div className='w-[90%] h-auto flex flex-col gap-12 items-center mx-auto mt-12'>
      {/* LEARNING PATH */}
      <div className='flex flex-col gap-8'>
        <h4 className='text-center  flex flex-row gap-2'><Book/> Learning Path</h4>
        <div className='text-justify flex flex-row gap-8 w-full border-2 bg-muted_pale border-text p-12'>
          <div className='flex flex-col gap-4 w-[25rem] my-auto'>
              <div>
                <h2 className='text-4xl  font-bold text-start'> Bachelors of Technology in Artificial Intelligence and data science </h2>
              <p> Velammal enginnering college </p>
              </div>
              <div className='flex flex-col gap-2 '>
                  <div className='flex flex-row gap-2 '>
                    <MapPin className='my-auto'/> 
                    <div>
                        <p className=''> Chennai, TamilNadu, India </p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 '>
                        <Calendar/> 
                        <p> March 2025 - Present </p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl '>
              <p className='text-prim'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos eius facere minima a? Dolorem voluptatibus fugiat nostrum! Recusandae eos earum, placeat non mollitia doloribus natus laborum. Deserunt repudiandae harum labore esse suscipit. Numquam modi quis voluptates harum aut provident excepturi quidem maiores iusto. Omnis optio culpa aliquid molestias vitae eligendi sunt odit vero beatae repudiandae exercitationem est ducimus nemo ut eius id molestiae, aspernatur consequuntur quo. Voluptatum nisi molestiae odio itaque dolorem asperiores atque quam, rem esse similique sit? Maiores odit ad at suscipit sed? Quod veniam repudiandae amet tenetur tempore alias, molestiae quibusdam culpa ducimus consequatur sequi at repellendus illo ex, qui minima temporibus vero sit, ratione exercitationem aut eligendi! Enim dolore est, consequatur fugit ipsam voluptatem quo perspiciatis sit autem voluptatibus id consequuntur tenetur unde sequi eligendi amet quis alias in! Quaerat eius ab omnis, possimus nemo aspernatur ipsa, laboriosam ea cupiditate aperiam dolores assumenda enim magni. Molestias facere voluptatem quae officia eius repudiandae delectus vero voluptas. Provident blanditiis illo iure, assumenda, cum corporis harum quibusdam repudiandae distinctio nemo necessitatibus nesciunt. Quos at, repellendus distinctio laudantium impedit ducimus. Quas optio expedita rem possimus quis aperiam. Similique facere, blanditiis sed quaerat veritatis facilis ipsum iusto sequi. Sit, repellat.
              </p>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className='flex flex-col gap-8'>
        <h4 className='text-center  flex flex-row gap-2'><Briefcase/> Experience</h4>
        <div className='text-justify bg-muted_pale flex flex-row-reverse gap-8 w-full border-2 border-text p-12'>
          <div className='flex flex-col gap-4 w-[25rem] my-auto'>
              <div>
                <h2 className='text-4xl  font-bold text-start'> Full Stack Developer </h2>
              <p> Velammal enginnering college </p>
              </div>
              <div className='flex flex-col gap-2 '>
                  <div className='flex flex-row gap-2 '>
                    <MapPin className='my-auto'/> 
                    <div>
                      
                        <p className=''> Chennai, TamilNadu, India </p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 '>
                        <Calendar/> 
                        <p> September 2023 - Present </p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl'>
              <p className='text-[#eaeaea]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos eius facere minima a? Dolorem voluptatibus fugiat nostrum! Recusandae eos earum, placeat non mollitia doloribus natus laborum. Deserunt repudiandae harum labore esse suscipit. Numquam modi quis voluptates harum aut provident excepturi quidem maiores iusto. Omnis optio culpa aliquid molestias vitae eligendi sunt odit vero beatae repudiandae exercitationem est ducimus nemo ut eius id molestiae, aspernatur consequuntur quo. Voluptatum nisi molestiae odio itaque dolorem asperiores atque quam, rem esse similique sit? Maiores odit ad at suscipit sed? Quod veniam repudiandae amet tenetur tempore alias, molestiae quibusdam culpa ducimus consequatur sequi at repellendus illo ex, qui minima temporibus vero sit, ratione exercitationem aut eligendi! Enim dolore est, consequatur fugit ipsam voluptatem quo perspiciatis sit autem voluptatibus id consequuntur tenetur unde sequi eligendi amet quis alias in! Quaerat eius ab omnis, possimus nemo aspernatur ipsa, laboriosam ea cupiditate aperiam dolores assumenda enim magni. Molestias facere voluptatem quae officia eius repudiandae delectus vero voluptas. Provident blanditiis illo iure, assumenda, cum corporis harum quibusdam repudiandae distinctio nemo necessitatibus nesciunt. Quos at, repellendus distinctio laudantium impedit ducimus. Quas optio expedita rem possimus quis aperiam. Similique facere, blanditiis sed quaerat veritatis facilis ipsum iusto sequi. Sit, repellat.
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Experience;