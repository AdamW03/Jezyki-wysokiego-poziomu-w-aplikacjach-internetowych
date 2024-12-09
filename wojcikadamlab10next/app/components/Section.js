import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import List from './List';

function Section({ title, titleLevel, paragraphs, listItems }) {
    return (
        <section>
            <Title text={title} level={titleLevel} />

            {paragraphs && paragraphs.length > 0 && (
                paragraphs.map((text, index) => (
                    <Paragraph key={index} text={text} />
                ))
            )}

            {listItems && listItems.length > 0 && <List items={listItems} />}
        </section>
    );
}

export default Section;
