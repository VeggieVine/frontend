export default function Loading() {
    return(
        <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="fixed inset-0 -z-10">
                        <div className="absolute inset-0 bg-zinc-200/70" />
                    </div>
    
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-live="polite" aria-busy="true" aria-labelledby="title-08a desc-08a" className="h-20 w-20" >
                        <path d="M7 8H3V16H7V8Z" className="animate animate-bounce fill-primary " />
                        <path d="M14 8H10V16H14V8Z" className="animate animate-bounce fill-primary [animation-delay:.2s]" />
                        <path d="M21 8H17V16H21V8Z" className="animate animate-bounce fill-primary [animation-delay:.4s]" />
                    </svg>
    
                    <h1 className="text-2xl font-semibold text-primary text-center" >Loading, please wait...</h1>
                </div>
            </div>
        </>
    )
}