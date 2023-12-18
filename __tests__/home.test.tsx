import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders HeroSection component', () => {
    expect(screen.getByText('빠르고 스마트한')).toBeInTheDocument();
    expect(screen.getByText('위험성 평가 솔루션')).toBeInTheDocument();

    expect(screen.getByText('아이라스는 중소기업을 위해서')).toBeInTheDocument();
    expect(screen.getByText('전문가와 기술이 만난 위험성 평가 솔루션입니다.')).toBeInTheDocument();

    expect(screen.getByText('아이라스 체험해보기')).toBeInTheDocument();
  });

  test('1+1=2', () => {
    expect(1 + 1).toBe(2);
  });
});
