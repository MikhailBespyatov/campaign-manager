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
import { useCloseClick } from 'hooks/closeClick';
import React, { ChangeEvent, useRef, useState } from 'react';
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
    const [focusState, setFocusState] = useState<boolean>(false);
    const isExpanded = !!searchResultList.length && !!focusState;
    const inputRef = useRef(null);

    useCloseClick(inputRef, () => setFocusState(false));

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        setSearchResultList(filterItems(value, itemsList));
    };

    const onFocus = () => {
        setFocusState(true);
        setSearchResultList(filterItems(value, itemsList));
    };

    const onClearSearchClick = () => {
        setValue('');
    };

    const onItemClick = (value: string) => {
        setValue('');
        onItemSelect(value);
        setFocusState(false);
    };

    return (
        <SearchSelectWrapper isExpanded={isExpanded}>
            <SearchInputWrapper isExpanded={isExpanded}>
                <SearchInput
                    ref={inputRef}
                    placeholder={placeholder}
                    value={value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                />
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
                                <ListItemWrapper key={item} onClick={() => onItemClick(item)}>
                                    {item}
                                </ListItemWrapper>
                            ))}
                    </Column>
                </ItemsAbsoluteWrapper>
            )}
        </SearchSelectWrapper>
    );
};
