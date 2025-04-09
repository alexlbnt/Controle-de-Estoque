import React from 'react';

interface ExampleComponentProps {
    title: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title }) => {
    return <div>{title}</div>;
};

export default ExampleComponent;