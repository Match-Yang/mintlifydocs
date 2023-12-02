// Button.mdx

import React from 'react';

/**
 * 按钮组件
 * @param {object} props - 按钮属性
 * @param {string} props.label - 按钮文本
 * @param {string} props.onClick - 按钮点击事件处理函数
 */
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

// 按钮的使用示例
# 使用按钮

<Button label="点击我" onClick={() => alert('按钮被点击了！')} />
