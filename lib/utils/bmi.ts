export function calculateBMI(weight: number, heightCm: number): { bmi: number; status: string } {
  if (!weight || !heightCm) return { bmi: 0, status: '' };
  
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let status = '';

  if (bmi < 18.5) {
    status = '저체중';
  } else if (bmi < 23) {
    status = '정상';
  } else if (bmi < 25) {
    status = '과체중';
  } else {
    status = '비만';
  }

  return { bmi: Number(bmi.toFixed(1)), status };
}
