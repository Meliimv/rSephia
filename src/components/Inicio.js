import React from 'react'

const Inicio = () => {
    return (
        <>
            <div className="hero min-h-screen bg-slate-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://coycoacademia.com/wp-content/uploads/2022/07/principios-de-la-cocteleria-clasica.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">welcome to the best experience</h1>
                        <p className="py-6">The place where you can choose your favourite drink and buy it or prepare it</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Inicio