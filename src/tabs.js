import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ReactMarkdown from 'react-markdown';
import "react-tabs/style/react-tabs.css";
import beautify from 'js-beautify';
import codeBase from './codeBase';

const tag = '```';
const merge = (lang, code) => `${tag}${lang}\n${code}\n${tag}`;

export default ({section}) => {
  if (codeBase[section]) {
    return (
      <Tabs>
        <TabList>
          {
            codeBase[section] && Object.keys(codeBase[section]).map(lang => <Tab key={lang}>{lang}</Tab>)
          }
        </TabList>
        {
          codeBase[section] && Object.keys(codeBase[section]).map(lang => <TabPanel key={lang}>
              <ReactMarkdown source={
                merge(lang, beautify.js(codeBase[section][lang], {indent_size: 2})
                )}/>
            </TabPanel>
          )
        }
      </Tabs>
    )
  } else {
    return <ReactMarkdown source={`> Section ${section} not found`}/>

  }
}
