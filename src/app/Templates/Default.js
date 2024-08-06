import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Default = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default