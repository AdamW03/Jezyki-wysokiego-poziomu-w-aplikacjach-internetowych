import React from 'react';
import Table from './Table';
import Title from './Title';

function SectionTable({ title, titleLevel, headers, body }) {
    return (
        <section>
            <Title text={title} level={titleLevel} />
            <Table headers={headers} body={body} />
        </section>
    );
}

export default SectionTable;
