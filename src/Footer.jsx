import Alert from 'react-bootstrap/Alert';

const Footer = (props) => {
    return (
        <div>
            <Alert key="light" variant="light">
                {props.texto}
            </Alert>
        </div>
    )
};

export default Footer