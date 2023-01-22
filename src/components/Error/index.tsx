import React, { FC, useEffect } from "react";

const Error: FC = () => {
  useEffect(() => {
    const error = new (Error as any)();
    throw error;
  });

  return null;
};

export default Error;
