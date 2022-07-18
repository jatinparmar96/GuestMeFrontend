import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const AccordionItem = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  margin: 0,
  padding: 0,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0)'
      : 'rgba(0, 0, 0, 0)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(90deg)',
    color: '#35afac',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  margin: 0,
}));

export const Accordion = (props) => {
  const { children, label } = props;
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <AccordionItem
        expanded={expanded === 'panel'}
        onChange={handleChange('panel')}
      >
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography
            fontWeight={700}
            fontSize={'0.9rem'}
            fontFamily={'"Barlow Condensed", sans-serif'}
          >
            {label}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </AccordionItem>
    </>
  );
};

// Reference source: https://mui.com/material-ui/react-accordion/
