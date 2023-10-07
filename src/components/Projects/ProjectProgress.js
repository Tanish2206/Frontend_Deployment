import { Container, Stack, Text } from '@chakra-ui/react';
import {
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

const projectStatusSteps = [
  { status: 'NotStarted', label: 'Not Started' },
  { status: 'PaymentDone', label: 'Payment Done' },
  { status: 'SiteVisitDone', label: 'Site Visit Done' },
  { status: 'DesignerAssigned', label: 'Designer Assigned' },
  { status: 'DesignSubmitted', label: 'Design Submitted' },
  { status: 'WaitingForApproval', label: 'Waiting for Approval' },
  { status: 'ChangesInProgress', label: 'Changes in Progress' },
  { status: 'FinalDesignSubmitted', label: 'Final Design Submitted' },
];

export default function ProjectMilestoneStatus({projectStatus}) {

  const { activeStep, setActiveStep } = useSteps({
    index: projectStatus,
    count: projectStatusSteps.length,
  });

  const activeStepStatus = projectStatusSteps[activeStep]?.status;
  const activeStepLabel = projectStatusSteps[activeStep-1]?.label;

  return (
    <Container maxW="full">
      <Stack>
        <Stepper size="lg" index={activeStep} gap="0">
          {projectStatusSteps?.map((step, index) => (
            <Step key={index} gap="0">
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  active={
  
                    (index+1) === activeStep}
                />
              </StepIndicator>
              {index !== projectStatusSteps.length - 1 && (
                <StepSeparator _horizontal={{ ml: '0' }} />
              )}
            </Step>
          ))}
        </Stepper>
        <Text mt={2}>
          Project Status: <b>{activeStepLabel?activeStepLabel:"Done"}</b>
        </Text>
      </Stack>
    </Container>
  );
}
