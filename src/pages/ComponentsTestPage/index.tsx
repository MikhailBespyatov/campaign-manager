import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Summary } from 'components/common/features/Summary';
import { Checkbox } from 'components/common/inputs/Checkbox';
import { LinkInput } from 'components/common/inputs/LinkInput';
import { Radio } from 'components/common/inputs/Radio';
import { RowRadio } from 'components/common/inputs/RowRadio';
import { TextInput } from 'components/common/inputs/TextInput';
import { CampaignTable } from 'components/common/tables/CampaignTable';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { DropDownMenuTag } from 'components/common/tags/DropDownMenuTag';
import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { Pagination } from 'components/Layouts/Pagination';
import React, { useState } from 'react';

const disabled = true;

const Space = () => <div style={{ marginBottom: '10px' }}></div>;

export const Test = () => {
    const [checked, setChecked] = useState(false);

    const onChange = () => setChecked(!checked);

    return (
        <>
            <Header />
            <div
                style={{
                    width: '600px',
                    //minHeight: '600px',
                    margin: 'auto',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <RoundedButton>normal</RoundedButton>
                <Space />
                <RoundedButton disabled={disabled}>disabled</RoundedButton>
                <Space />
                <Checkbox checked={checked} onChange={onChange} />
                <Space />
                <Checkbox checked={checked} disabled={disabled} onChange={onChange} />
                <Space />
                <TextInput error="" label="Some label" name="username" value="" />
                <Space />
                <TextInput disabled={disabled} error="" label="Some label" name="username" value="" />
                <Space />
                <TextInput error="error" label="Some label" name="username" value="" />
                <Space />
                <LinkInput error="" label="Some label" name="username" value="" />
                <Space />
                <LinkInput disabled={disabled} error="" label="Some label" name="username" value="" />
                <Space />
                <LinkInput error="error" label="Some label" name="username" value="" />
                <Space />
                <Radio checked={checked} onChange={onChange} />
                <Space />
                <Radio checked={checked} disabled={disabled} onChange={onChange} />
                <Space />
                <VideoCard />
                <Space />
                <Pagination />
                <Space />
                <CampaignTable />
                <Space />
                <Summary summary="0.00" />
                <Space />
                <ClosableTag closable>ADIDAS</ClosableTag>
                <Space />
                <ClosableTag>ADIDAS</ClosableTag>
                <Space />
                <DropDownMenuTag>7 DAYS</DropDownMenuTag>
                <Space />
                <RowRadio />
                <Space />
            </div>
            <Footer />
        </>
    );
};
