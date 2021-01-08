import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaCheck, FaTimes } from 'react-icons/fa';

interface Props {
  text: string;
  label: string;
  rawText: string;
}

export default function AccountDetail({
  text,
  label,
  rawText,
}: Props): JSX.Element {
  const [status, setStatus] = useState('initial');
  const timeout = useRef<NodeJS.Timeout>();

  const handleClick = async () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    try {
      await navigator.clipboard.writeText(rawText);
      console.info(`Copied "${rawText}" to clipboard`);
      setStatus('success');
    } catch (error) {
      console.error('Unable to write to clipboard', error);
      setStatus('failure');
    }

    timeout.current = setTimeout(() => {
      setStatus('initial');
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [timeout]);

  return (
    <div
      className="grow pointer copy flex w-100 items-center mv2"
      onClick={handleClick}
    >
      <div className="mr2">
        {status === 'initial' && <FaCopy className="w1 h-auto" />}
        {status === 'success' && <FaCheck className="w1 h-auto" />}
        {status === 'failure' && <FaTimes className="w1 h-auto" />}
      </div>
      <div>
        <div className="f5 b">{label}</div>
        <div className="f4">{text}</div>
      </div>
    </div>
  );
}
