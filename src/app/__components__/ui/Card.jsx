import Image from "next/image"

const TestimonialCard = ({ imageSrc, name, testimonial }) => {
    return (
        <div className="relative flex flex-col items-center px-8 bg-white border-2 rounded-[32px] shadow-lg w-[400px] h-full">
            <div className="absolute border-2 rounded-full shadow-lg -top-16">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-full w-[150px] h-[150px]"
                />
            </div>
            <div className="my-20 text-justify">
                <p className="mt-2 text-gray-600">{testimonial}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
