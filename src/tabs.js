import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ReactMarkdown from 'react-markdown';
import 'react-tabs/style/react-tabs.css';
import examples from './examples';
import languages from './languages';

const tag = '```';
const merge = (lang, code) => `${tag}${lang}\n${code}\n${tag}`;


export default ({section}) => {
  if (examples[section]) {

    const tabs = [];
    const panels = [];

    Object.keys(examples[section]).map(lang => {
      if (languages[lang]) {
        /*tabs.push(<Tab key={lang}>{languages[lang]}</Tab>);
        panels.push(<TabPanel key={lang}>
          <ReactMarkdown source={merge(lang, examples[section][lang])}/>
        </TabPanel>);*/
        panels.push(<ReactMarkdown source={merge(lang, examples[section][lang])}/>);
      }
    });

    return (
      <Tabs>
        <TabList>{tabs}</TabList>
        {panels}
      </Tabs>
    )
  } else {
    return <ReactMarkdown source={`> Section ${section} not found`}/>

  }
}
