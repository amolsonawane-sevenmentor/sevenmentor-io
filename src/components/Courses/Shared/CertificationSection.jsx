import { Award, CheckCircle, FileCheck, Trophy } from 'lucide-react';
import { certificationData } from '../../../data/certificationData.js';

export default function CertificationSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-50 to-white p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{certificationData.title}</h2>
            <p className="text-sm text-gray-600">{certificationData.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-gray-700 leading-relaxed mb-8">
          {certificationData.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-orange-600" />
              <h3 className="font-bold text-gray-900 text-lg">Exam Details</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(certificationData.examDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-0">
                  <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-900 text-lg">Certificate Features</h3>
            </div>
            <div className="space-y-3">
              {certificationData.certificateFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-orange-50 to-yellow-50 p-6 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-6 text-lg text-center">Certification Process</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {certificationData.certificationProcess.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white p-4 rounded-xl border border-gray-200 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
                {step.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
