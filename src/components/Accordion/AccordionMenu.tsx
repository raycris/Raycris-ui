import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';

export interface AccordionMenuProps{
  optionTitle: string,
  optionDescripton: string,
  nummberOfOptions:number[];
}

const AccordionMenu = (props: AccordionMenuProps) => (
  <>
  {
    props.nummberOfOptions.map(spaces => (

  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible key={spaces}>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>{props.optionTitle}</AccordionTrigger>
      <AccordionContent>{props.optionDescripton}</AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
    ))
  }
  </>

   
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default AccordionMenu;