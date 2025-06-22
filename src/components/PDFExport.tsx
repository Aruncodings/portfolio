import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFExport = () => {
  const generatePDF = async () => {
    const element = document.body;
    
    try {
      // Hide the PDF export button temporarily
      const pdfButton = document.getElementById('pdf-export');
      if (pdfButton) {
        pdfButton.style.display = 'none';
      }

      // Create canvas from the entire page
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        height: window.innerHeight,
        width: window.innerWidth,
        scrollX: 0,
        scrollY: 0,
      });

      // Show the button again
      if (pdfButton) {
        pdfButton.style.display = 'block';
      }

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('M_Arun_Kumar_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <button
      id="pdf-export"
      onClick={generatePDF}
      style={{ display: 'none' }}
      aria-hidden="true"
    >
      Export PDF
    </button>
  );
};

export default PDFExport;