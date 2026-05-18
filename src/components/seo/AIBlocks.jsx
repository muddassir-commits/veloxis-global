import React from 'react';
import { HelpCircle, CheckSquare, Clock, AlertTriangle, Cpu, DollarSign, UserCheck } from 'lucide-react';
import './AIBlocks.css';

/**
 * QuickAnswer Component
 * Targets citable "what is" and direct definition intents.
 */
export const QuickAnswer = ({ question, answer }) => {
  return (
    <div className="ai-block quick-answer-block glass-card">
      <div className="ai-block-header">
        <HelpCircle size={18} className="accent-gold" />
        <h3>Quick Answer</h3>
      </div>
      {question && <p className="quick-question"><strong>Query:</strong> {question}</p>}
      <p className="quick-answer-text">{answer}</p>
    </div>
  );
};

/**
 * KeyTakeaways Component
 * Targets list-oriented featured snippets.
 */
export const KeyTakeaways = ({ items = [] }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="ai-block takeaways-block glass-card">
      <div className="ai-block-header">
        <CheckSquare size={18} className="accent-gold" />
        <h3>Key Takeaways</h3>
      </div>
      <ul className="takeaways-list">
        {items.map((item, idx) => (
          <li key={idx}>
            <span className="takeaway-bullet"></span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * TimelineBlock Component
 * Targets implementation roadmap queries.
 */
export const TimelineBlock = ({ steps = [] }) => {
  if (!steps || steps.length === 0) return null;
  return (
    <div className="ai-block timeline-block glass-card">
      <div className="ai-block-header">
        <Clock size={18} className="accent-gold" />
        <h3>Systems Implementation Timeline</h3>
      </div>
      <div className="timeline-flow">
        {steps.map((step, idx) => (
          <div key={idx} className="timeline-node">
            <div className="node-marker">
              <span className="node-number">{idx + 1}</span>
            </div>
            <div className="node-content">
              <h4>{step.phase} <span className="node-duration">({step.duration})</span></h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * CommonMistakes Component
 * Targets troubleshooting and practitioner-intent search queries.
 */
export const CommonMistakes = ({ mistakes = [] }) => {
  if (!mistakes || mistakes.length === 0) return null;
  return (
    <div className="ai-block mistakes-block glass-card">
      <div className="ai-block-header">
        <AlertTriangle size={18} className="accent-bronze" />
        <h3>Critical Integration Pitfalls</h3>
      </div>
      <ul className="mistakes-list">
        {mistakes.map((item, idx) => (
          <li key={idx}>
            <div className="mistake-item-header">
              <strong>Pitfall:</strong> {item.title}
            </div>
            <p className="mistake-item-solution"><strong>Fix:</strong> {item.fix}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * BestTools Component
 * Targets stack comparisons and comparative evaluation queries.
 */
export const BestTools = ({ title, tools = [] }) => {
  if (!tools || tools.length === 0) return null;
  return (
    <div className="ai-block best-tools-block glass-card">
      <div className="ai-block-header">
        <Cpu size={18} className="accent-gold" />
        <h3>{title || 'Recommended Automation Stack'}</h3>
      </div>
      <div className="tools-grid">
        {tools.map((tool, idx) => (
          <div key={idx} className="tool-card">
            <div className="tool-card-top">
              <h4>{tool.name}</h4>
              <span className="tool-rating">{tool.rating}</span>
            </div>
            <p className="tool-usecase"><strong>Ideal For:</strong> {tool.useCase}</p>
            <p className="tool-verdict">{tool.verdict}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
