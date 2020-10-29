import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((Item) => (
        <Accordion.Item key={Item.id}>
          <Accordion.Header> {Item.header} </Accordion.Header>
          <Accordion.Body>{Item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
