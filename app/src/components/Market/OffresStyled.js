import styled from 'styled-components'
/////
export const OffresContainer = styled.section`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media only screen and (max-width:768px) {
  height: 120rem;

}


`;
export const OffresH1 = styled.h1`
font-size: 4rem;
color: #1B2A3D;
margin-bottom: 6.4rem;

@media only screen and (max-width: 480px){
  font-size: 3.2rem
}
`;
export const OffresWrapper = styled.div`
max-width: 1300px;
margin: 0 auto;display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-content: center;
grid-gap: 2.5rem;
padding: 0 50px;

@media only screen and (max-width:1000px) {
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width:768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;
export const OffresCard = styled.div`
background-color: #1B2A3D;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 10px;
max-height: 34rem;
padding: 3.8rem;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all .5s ease;
line-height: 1.4;

&:hover{
  transform: scale(1.1);
  cursor: pointer;

  @media only screen and (max-width:768px){
    transform: scale(1.02);
  }
}

/* @media only screen and (max-width:1900px){
    max-height: 50rem;
  } */
`;
export const OffresIcon = styled.img`
height: 16rem;
width: 16rem;
margin-bottom: 1rem;
margin: 0 auto;
`;
export const OffresH2 = styled.h2`
margin-bottom: 1rem;
font-size: 1.3rem;
color: #fff;
`;

export const OffresP = styled.p`
text-align: center;
font-size: 1.1rem;
color: #fff;
`;
export const OffresChiffre = styled.p`
text-align: center;
font-size: 1.6rem;
color: #FF1616;
`;
export const OffresVente = styled.p`
text-align: center;
font-size: 1.2rem;
color: #5CE1E6;
`;
export const OffresAchat = styled.p`
text-align: center;
font-size: 1.2rem;
color: #5CE672;
`;
