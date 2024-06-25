interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-4xl font-bold">무언가 잘못되었습니다.</h3>
      <p className="text-3xl">웹페이지를 새로고침해서 다시 시도해보세요.</p>
      <p className="text-gray-400">
        문제 해결이 되지않으시나요?
        <span className="underline ml-2 text-blue-300">
          개발자에게 연락하기
        </span>
      </p>
      <pre className="text-red-400">{error.message}</pre>
    </div>
  );
};

export default Error;
