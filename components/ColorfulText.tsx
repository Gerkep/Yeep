import styled from 'styled-components';

const ColorfulText = (props: any) => {
    return(
        <Colorful>
            {props.children}
        </Colorful>
    )
}

export default ColorfulText;

const Colorful = styled.div`
    display: inline;
    background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`