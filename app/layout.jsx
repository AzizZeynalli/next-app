import '@styles/globals.css'

export const metadata = {
    title: "AI Innovation",
    description: "Empowering AI Innovation Together"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className='bg-gradient-to-br from-indigo-100 via-cyan-200 to-sky-200 bg-no-repeat min-h-screen bg-auto'>
                <div className="main">
                    <div className="gradient"/>
                </div>

                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    );
}


export default RootLayout;
