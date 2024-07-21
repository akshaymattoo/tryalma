// pages/index.tsx
import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';
import Head from 'next/head';
import { Button, Box, Image, Text } from '@chakra-ui/react';

import jsonSchema from '../../schemas/jsonSchema.json';
import uiSchema from '../../schemas/uiSchema.json';
import { chakraRenderers } from '../../schemas/customRenderers';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { useRouter } from 'next/router'

const Assesment = () => {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            console.log(formData);
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
            router.push('/assesment/thank-you')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Box position="relative" width="100%">
                <Image src="/assessment_header.jpg" alt="Description of image" width="100%" />
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="black" textAlign="left">
                    <Text fontSize='5xl' fontWeight="bold">Get an assessment</Text>
                    <Text fontSize='5xl' fontWeight="bold">of your immigration case</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" minHeight="100vh" width={'90%'}>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Image src="/file-info.png" alt="Description of image" />
                    <Text fontSize='2xl' mx="auto">Want to understand your visa options?</Text>
                    <Text fontSize='md' mx="auto" width={'50%'}>Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.</Text>
                </Box>
                <JsonForms
                    schema={jsonSchema}
                    uischema={uiSchema}
                    data={formData}
                    renderers={chakraRenderers}
                    onChange={({ data }) => setFormData(data)}
                />

                <Button bg="black"
                    color="white"
                    _hover={{ bg: "gray.700" }}
                    borderRadius="50" width="30%" mx="auto" onClick={handleSubmit}>Submit</Button>
            </Box>
        </>
    );
};

export default Assesment;
