import { ClearInputButton } from 'components/common/buttons/ClearInputButton';
import { filterItems } from 'components/common/inputs/SearchSelect/constants';
import {
    IconAbsoluteWrapper,
    ItemsAbsoluteWrapper,
    ListItemWrapper,
    SearchInput,
    SearchInputWrapper,
    SearchSelectWrapper
} from 'components/common/inputs/SearchSelect/styles';
import { Loader } from 'components/dynamic/Loader';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import React, { ChangeEvent, useState } from 'react';
import { DefaultValueString, Loading, Placeholder } from 'types';

export interface SearchSelectProps extends Placeholder, DefaultValueString, Loading {
    itemsList: string[];
    onItemSelect: (value: string) => void;
}

export const SearchSelect = ({
    loading = false,
    defaultValue = '',
    onItemSelect,
    placeholder,
    itemsList = []
}: SearchSelectProps) => {
    const [value, setValue] = useState<string>(defaultValue);
    const [searchResultList, setSearchResultList] = useState<string[]>([]);
    const isExpanded = !!searchResultList.length && !!value;

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        setSearchResultList(filterItems(value, itemsList));
    };

    const onClearSearchClick = () => {
        setValue('');
    };

    const onItemClick = (value: string) => {
        setValue('');
        onItemSelect(value);
    };

    return (
        <SearchSelectWrapper isExpanded={isExpanded}>
            <SearchInputWrapper isExpanded={isExpanded}>
                <SearchInput placeholder={placeholder} value={value} onChange={onInputChange} />
                <IconAbsoluteWrapper right="0px" top="0px">
                    {value && <ClearInputButton onClick={onClearSearchClick} />}
                </IconAbsoluteWrapper>
            </SearchInputWrapper>

            {isExpanded && (
                <ItemsAbsoluteWrapper>
                    <Column>
                        {loading && (
                            <Section justifyCenter margin="10px 0">
                                <Loader size="middle" />
                            </Section>
                        )}

                        {!loading &&
                            searchResultList.map(item => (
                                <ListItemWrapper key={item} onClick={() => onItemClick(value)}>
                                    {item}
                                </ListItemWrapper>
                            ))}
                    </Column>
                </ItemsAbsoluteWrapper>
            )}
        </SearchSelectWrapper>
    );
};
