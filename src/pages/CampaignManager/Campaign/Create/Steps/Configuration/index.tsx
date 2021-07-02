import { LineBorder } from 'components/common/dividers/LineBorder';
import { Checkbox, CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Span } from 'components/common/typography/Span';
import { Column, FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { grey4, primaryMargin, tertiaryMargin } from 'constants/styles';
import {
    ageMock,
    configurationContentPadding,
    hashtagsMock,
    localeMock,
    overridesMock
} from 'pages/CampaignManager/Campaign/Create/Steps/Configuration/constants';
import React, { FC } from 'react';
import { CreateCampaignStepsProps, MaxSizes, Title } from 'types';
import {
    CheckboxBlockWrapper,
    ConfigurationItemSubtitle,
    ConfigurationItemTitle,
    ConfigurationItemWrapper
} from './styles';

//Uncomment when Configuration page needed use
//
// const BiasTitleLayout: FC = ({ children }) => (
//     <RelativeWrapper width="auto">
//         {children}
//         <AbsoluteWrapper left="40px" top="-45px">
//             <BiasTitle>Bias</BiasTitle>
//         </AbsoluteWrapper>
//     </RelativeWrapper>
// );
//
// interface BiasSelectProps extends Pick<Title, 'title'>, OnChangeSelect, Bias {
//     isTitleBiasSelect?: boolean;
// }
//
// const BiasSelect = ({ title, onChangeSelect, bias, isTitleBiasSelect }: BiasSelectProps) => (
//     <CheckboxBlockWrapper width="297px">
//         <Section alignCenter justifyBetween height="100%">
//             <Row>
//                 <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
//                     {title}
//                 </Span>
//             </Row>
//             {isTitleBiasSelect ? (
//                 <BiasTitleLayout>
//                     <Select defaultActive={bias} values={biasValues} width="110px" onChange={onChangeSelect} />
//                 </BiasTitleLayout>
//             ) : (
//                 <Select defaultActive={bias} values={biasValues} width="110px" onChange={onChangeSelect} />
//             )}
//         </Section>
//     </CheckboxBlockWrapper>
// );
//
// interface HashtagCheckboxProps
//     extends DefaultValueBoolean,
//         OnChangeBoolean,
//         Pick<Title, 'subtitle'>,
//         OnChangeSelect,
//         Bias {
//     hashtag: string;
//     isTitleCheckbox?: boolean;
// }
//
// const HashtagCheckbox = ({
//     hashtag,
//     subtitle,
//     bias,
//     defaultValue,
//     onChange = Noop,
//     onChangeSelect,
//     isTitleCheckbox
// }: HashtagCheckboxProps) => {
//     const flexBasis = getFlexBasisPercent(3);
//
//     return (
//         <CheckboxBlockWrapper checked={defaultValue} width="100%">
//             <Section alignCenter justifyBetween height="100%">
//                 <FlexGrow flexBasis={flexBasis}>
//                     <Hashtag onClick={() => onChange(!defaultValue)}>{hashtag}</Hashtag>
//                 </FlexGrow>
//                 <FlexGrow alignCenter flexBasis={flexBasis}>
//                     <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
//                         Viewers:
//                         <Span fontSize="13px" fontWeight="400" lineHeight="16px">
//                             {` ${subtitle}`}
//                         </Span>
//                     </Span>
//                 </FlexGrow>
//                 <FlexGrow alignEnd flexBasis={flexBasis}>
//                     {isTitleCheckbox ? (
//                         <BiasTitleLayout>
//                             <Select
//                                 defaultActive={bias}
//                                 disabled={!defaultValue}
//                                 values={biasValues}
//                                 width="110px"
//                                 onChange={onChangeSelect}
//                             />
//                         </BiasTitleLayout>
//                     ) : (
//                         <Select
//                             defaultActive={bias}
//                             disabled={!defaultValue}
//                             values={biasValues}
//                             width="110px"
//                             onChange={onChangeSelect}
//                         />
//                     )}
//                 </FlexGrow>
//             </Section>
//         </CheckboxBlockWrapper>
//     );
// };

interface CheckboxBlockProps extends CheckboxProps, Title {}

const CheckboxBlock = ({ title, subtitle, defaultValue, ...rest }: CheckboxBlockProps) => (
    <CheckboxBlockWrapper checked={defaultValue} width="296px">
        <Section alignCenter height="100%">
            <MarginWrapper marginRight="20px">
                <Checkbox defaultValue={defaultValue} {...rest} />
            </MarginWrapper>
            {subtitle ? (
                <Column justifyBetween height="100%">
                    <Row>
                        <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                            {title}
                        </Span>
                    </Row>
                    <Row>
                        <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
                            Viewers:
                            <Span fontSize="13px" fontWeight="400" lineHeight="16px">
                                {` ${subtitle}`}
                            </Span>
                        </Span>
                    </Row>
                </Column>
            ) : (
                <Column justifyCenter height="100%">
                    <Row>
                        <Span fontSize={defaultFontSize} fontWeight={defaultFontWeight} lineHeight="17px">
                            {title}
                        </Span>
                    </Row>
                </Column>
            )}
        </Section>
    </CheckboxBlockWrapper>
);

interface ConfigurationItemProps extends Title, Pick<MaxSizes, 'maxHeight'> {
    withoutLine?: boolean;
}

const ConfigurationItem: FC<ConfigurationItemProps> = ({ children, title, subtitle, withoutLine, maxHeight }) => (
    <>
        <ConfigurationItemWrapper maxHeight={maxHeight}>
            <FlexGrow flexBasis="40%" flexShrink="0">
                <MarginWrapper marginBottom={primaryMargin}>
                    <ConfigurationItemTitle>{title}</ConfigurationItemTitle>
                </MarginWrapper>
                <ConfigurationItemSubtitle>{subtitle}</ConfigurationItemSubtitle>
            </FlexGrow>
            <FlexGrow flexBasis="60%" flexShrink="0" height={maxHeight}>
                {children}
            </FlexGrow>
        </ConfigurationItemWrapper>
        {!withoutLine && (
            <MarginWrapper marginBottom="45px">
                <LineBorder />
            </MarginWrapper>
        )}
    </>
);

export const Configuration: FC<CreateCampaignStepsProps> = () => {
    const ageData = ageMock;
    const localeData = localeMock;
    const hashtagsData = hashtagsMock;
    const overridesData = overridesMock;
    // const { value: ageValue, onChange: onChangeAge } = useField(forms.createCampaignForm.fields.age);
    // const { value: localeValue, onChange: onChangeLocale } = useField(forms.createCampaignForm.fields.locale);
    // const { value: hashtagsValue, onChange: onChangeHashtags } = useField(forms.createCampaignForm.fields.hashtags);
    // const { value: overridesValue, onChange: onChangeOverrides } = useField(forms.createCampaignForm.fields.overrides);

    // const onChangeAgeCheckbox = (index: number) => (checked: boolean) =>
    //     checked ? onChangeAge([...ageValue, index]) : onChangeAge(ageValue.filter(item => item !== index));
    //
    // const onChangeLocaleCheckbox = (index: number) => (checked: boolean) =>
    //     checked ? onChangeLocale([...localeValue, index]) : onChangeLocale(localeValue.filter(item => item !== index));
    //
    // const onChangeHashtagCheckbox = (hashtag: string) => (checked: boolean) => {
    //     checked
    //         ? onChangeHashtags([...hashtagsValue, { hashtag, bias: '2' }])
    //         : onChangeHashtags(hashtagsValue.filter(item => item.hashtag !== hashtag));
    // };
    //
    // const onChangeHashtagSelect = (hashtag: string) => (active: string) =>
    //     onChangeHashtags([...hashtagsValue.filter(item => item.hashtag !== hashtag), { hashtag, bias: active }]);
    //
    // const onChangeOverrideSelect = (form: string) => (active: string) =>
    //     onChangeOverrides({ ...overridesValue, [form]: active });

    return (
        <ContentWrapper padding={configurationContentPadding} width="100%">
            <ConfigurationItem subtitle="This is a details lorem ipsum dolor ise" title="Demographics" />
            <ConfigurationItem maxHeight="250px" subtitle="This is a details lorem ipsum dolor ise" title="Age">
                {ageData.map(({ range, viewers }, index) => (
                    <MarginWrapper key={range} marginBottom={tertiaryMargin}>
                        <CheckboxBlock
                            // defaultValue={ageValue.includes(index)}
                            subtitle={viewers}
                            title={range}
                            // onChange={onChangeAgeCheckbox(index)}
                        />
                    </MarginWrapper>
                ))}
            </ConfigurationItem>
            <ConfigurationItem maxHeight="350px" subtitle="This is a details lorem ipsum dolor ise" title="Locale">
                {localeData.map(({ locale, viewers }, index) => (
                    <MarginWrapper key={locale} marginBottom={tertiaryMargin}>
                        <CheckboxBlock
                            // defaultValue={localeValue.includes(index)}
                            subtitle={viewers}
                            title={locale}
                            // onChange={onChangeLocaleCheckbox(index)}
                        />
                    </MarginWrapper>
                ))}
            </ConfigurationItem>
            <ConfigurationItem
                subtitle="List of all hashtags associated with current selected videos."
                title="Hashtags"
            >
                {hashtagsData.map(({ hashtag, viewers }, index) => (
                    <Section key={hashtag} marginBottom={primaryMargin}>
                        {/*<HashtagCheckbox*/}
                        {/*    bias={hashtagsValue.find(item => item.hashtag === hashtag)?.bias || '2'}*/}
                        {/*    defaultValue={hashtagsValue.some(item => item.hashtag === hashtag)}*/}
                        {/*    hashtag={hashtag}*/}
                        {/*    isTitleCheckbox={index === 0}*/}
                        {/*    subtitle={viewers}*/}
                        {/*    onChange={onChangeHashtagCheckbox(hashtag)}*/}
                        {/*    onChangeSelect={onChangeHashtagSelect(hashtag)}*/}
                        {/*/>*/}
                    </Section>
                ))}
            </ConfigurationItem>
            <ConfigurationItem
                withoutLine
                maxHeight="250px"
                subtitle="This is a details lorem ipsum dolor ise"
                title="Overrides"
            >
                {overridesData.map(({ title, form }, index) => (
                    <MarginWrapper key={title} marginBottom={tertiaryMargin}>
                        {/*<BiasSelect*/}
                        {/*    bias={overridesValue[form]}*/}
                        {/*    isTitleBiasSelect={index === 0}*/}
                        {/*    title={title}*/}
                        {/*    onChangeSelect={onChangeOverrideSelect(form)}*/}
                        {/*/>*/}
                    </MarginWrapper>
                ))}
                <MarginWrapper>
                    {/*<CheckboxBlock*/}
                    {/*    defaultValue={overridesValue.mustWatch}*/}
                    {/*    title="Must watch"*/}
                    {/*    onChange={(checked: boolean) => onChangeOverrides({ ...overridesValue, mustWatch: checked })}*/}
                    {/*/>*/}
                </MarginWrapper>
            </ConfigurationItem>
        </ContentWrapper>
    );
};
