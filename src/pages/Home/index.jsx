import { Container } from "../../assets/styles/style"
import Link from "../../components/Buttons/Link"
import { Helmet } from "react-helmet"

function Home(){
    return <>
        <Helmet>
            <title>Teste</title>
        </Helmet>
        <Container>
            <h1>Home Page</h1><Link texto="testando" />
        </Container>
    </>
}

export default Home