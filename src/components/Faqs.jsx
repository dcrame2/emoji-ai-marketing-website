import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is Emoji AI?',
      answer:
        'Emoji AI is a fun and creative tool that turns your prompts into emoji sets. You can also build custom sets and save them for future use.',
    },
    {
      question: 'Is Emoji AI free to use?',
      answer:
        'You can try Emoji AI free for 7 days with full access to all features. After that, you can subscribe to a monthly or annual plan for continued access.',
    },
    {
      question: 'How do I create my own emoji sets?',
      answer:
        'You can easily create custom emoji sets using our drag-and-drop interface. Once created, they can be saved and copied for easy sharing.',
    },
  ],
  [
    {
      question: 'Can I copy my emojis for use in other apps?',
      answer:
        'Yes! Emoji AI lets you copy your generated emoji sets with a single tap, making it easy to paste them anywhere you want.',
    },
    {
      question: 'Do I need an account to use Emoji AI?',
      answer:
        'Yes, an account is required to save custom sets and access all features. Creating an account is quick and easy.',
    },
    {
      question: 'What devices are supported?',
      answer:
        'Emoji AI works on both iOS and Android devices. Download it from your preferred app store and start creating emojis today!',
    },
  ],
  [
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes! You can manage or cancel your subscription anytime directly through the Apple App Store or Google Play Store.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'If you have any questions or need help, feel free to contact us at support@emojiAI.com. We’re here to help!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Still have questions?{' '}
            <a
              href="mailto:support@emojiAI.com"
              className="text-gray-900 underline"
            >
              Contact our support team
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
