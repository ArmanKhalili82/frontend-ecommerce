import React from 'react'
import { AiFillPhone, AiFillSkin } from "react-icons/ai";
import { GiLoincloth } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";


const Features = () => {
    const features = [
        {
          name: 'Call Us anywhere',
          description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
          icon: AiFillPhone,
        },
        {
          name: 'Best Quality',
          description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
          icon: AiFillSkin,
        },
        {
          name: 'Great Collection',
          description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
          icon: GiLoincloth,
        },
        {
          name: 'Advanced security',
          description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
          icon: MdOutlineSecurity,
        },
      ]
      
        return (
          <div className="bg-white py-24 sm:py-32 mt-3">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Shop</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                  Everything you need to about our shop
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                  pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )
      }
export default Features;