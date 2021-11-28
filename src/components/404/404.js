import * as S from './Styled.js'
import logo from '../../assets/images/page_not_found.svg'

const Page404 = () => {
   return (
      <S.Container>
         <S.Image src={logo} alt='error 404'/>
      </S.Container>
   )
}

export default Page404
