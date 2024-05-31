import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import IMActionHeaderBar from '../../IMActionHeaderBar';
import IMLabelPair from '../../IMLabelPair';
import { useStepper } from '../StepperContext';
import { handleAndroidBackButton } from '../../../utils/common';
import { useStyles } from './styles';

interface IStepHeaderStyleProps {
  headerContainer: StyleProp<ViewStyle>;
  progressBarContainer: StyleProp<ViewStyle>;
  progressBar: StyleProp<ViewStyle>;
  subHeaderContainer: StyleProp<ViewStyle>;
}

export interface IStepHeaderProps {
  id?: string;
  headerTitle: string;
  backBtnAction?: () => void;
  backBtnDisabled?: boolean;
  styles?: IStepHeaderStyleProps;
}

const StepHeader: React.FunctionComponent<IStepHeaderProps> = (props) => {
  const { goToPreviousStep, stepperState } = useStepper();
  const { activeStep, stepData } = stepperState;
  const totalSteps = Object.keys(stepData).length;
  const progress = !!totalSteps ? ((activeStep + 1) * 100) / totalSteps : 0;

  const theme = useTheme();
  const styles = useStyles(theme, progress);
  const { t } = useTranslation('common');

  const { label, description } = stepData[activeStep]?.stepLabel ?? {};

  const handleBackBtn = () => {
    if (!props.backBtnDisabled) activeStep === 0 ? props.backBtnAction?.() : goToPreviousStep();
  };

  useEffect(() => {
    const handleBackEvent = handleAndroidBackButton(handleBackBtn);
    return () => handleBackEvent.remove();
  }, [activeStep, props.backBtnDisabled]);

  const renderProgressBar = () => (
    <View style={[styles.progressBarContainer, props.styles?.progressBarContainer]}>
      <View style={[styles.progressBar, props.styles?.progressBar]} />
    </View>
  );

  const renderSubHeader = () => (
    <View style={[styles.subHeaderContainer, props.styles?.subHeaderContainer]}>
      <Text style={styles.stepTitle}>{`${t('step')} ${activeStep + 1}/${totalSteps}`} </Text>
      <IMLabelPair
        variant="vertical"
        primaryText={label}
        secondaryText={description}
        styles={{
          container: styles.labelPairContainer,
          primaryText: styles.primaryText,
          secondaryText: styles.secondaryText,
        }}
      />
    </View>
  );

  return (
    <>
      <IMActionHeaderBar
        id={props.id ?? 'backBtn'}
        title={props.headerTitle}
        backBtnAction={handleBackBtn}
        styles={{ container: [styles.headerContainer, props.styles?.headerContainer] }}
      />
      {renderProgressBar()}
      {renderSubHeader()}
    </>
  );
};

export default StepHeader;
