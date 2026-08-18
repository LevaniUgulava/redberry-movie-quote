<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute უნდა იყოს მიღებული.',
    'accepted_if' => 'ველი :attribute უნდა იყოს მიღებული, როდესაც :other არის :value.',
    'active_url' => 'ველი :attribute უნდა იყოს სწორი URL.',
    'after' => 'ველი :attribute უნდა იყოს თარიღი :date-ის შემდეგ.',
    'after_or_equal' => 'ველი :attribute უნდა იყოს თარიღი :date-ის შემდეგ ან ტოლი.',
    'alpha' => 'ველი :attribute უნდა შეიცავდეს მხოლოდ ასოებს.',
    'alpha_dash' => 'ველი :attribute უნდა შეიცავდეს მხოლოდ ასოებს, ციფრებს, ტირეებს და ქვედა ხაზებს.',
    'alpha_num' => 'ველი :attribute უნდა შეიცავდეს მხოლოდ ასოებსა და ციფრებს.',
    'any_of' => 'ველი :attribute არასწორია.',
    'array' => 'ველი :attribute უნდა იყოს მასივი.',
    'array_keys' => 'ველი :attribute უნდა შეიცავდეს მხოლოდ შემდეგ გასაღებებს: :values.',
    'ascii' => 'ველი :attribute უნდა შეიცავდეს მხოლოდ ცალბაიტიან ალფანუმერულ სიმბოლოებს.',
    'base64' => 'ველი :attribute უნდა იყოს სწორი Base64 სტრიქონი.',
    'before' => 'ველი :attribute უნდა იყოს თარიღი :date-ის წინ.',
    'before_or_equal' => 'ველი :attribute უნდა იყოს თარიღი :date-ის წინ ან ტოლი.',
    'between' => [
        'array' => ':attribute უნდა შეიცავდეს :min-დან :max-მდე ელემენტს.',
        'file' => 'ველი :attribute უნდა იყოს :min-დან :max კილობაიტს შორის.',
        'numeric' => 'ველი :attribute უნდა იყოს :min-დან :max-მდე.',
        'string' => ':attribute უნდა იყოს :min-დან :max სიმბოლოს შორის.',
    ],
    'boolean' => 'ველი :attribute უნდა იყოს სიმართლე ან სიცრუე.',
    'can' => 'ველი :attribute შეიცავს არაავტორიზებულ მნიშვნელობას.',
    'confirmed' => 'ველი :attribute-ის დადასტურება არ ემთხვევა.',
    'contains' => 'ველში :attribute აკლია სავალდებულო მნიშვნელობა.',
    'current_password' => 'პაროლი არასწორია.',
    'date' => 'ველი :attribute უნდა იყოს სწორი თარიღი.',
    'date_equals' => 'ველი :attribute უნდა იყოს თარიღი :date-ის ტოლი.',
    'date_format' => 'ველი :attribute უნდა შეესაბამებოდეს ფორმატს :format.',
    'decimal' => 'ველი :attribute უნდა შეიცავდეს :decimal ათობით სიმბოლოს.',
    'declined' => 'ველი :attribute უნდა იყოს უარყოფილი.',
    'declined_if' => 'ველი :attribute უნდა იყოს უარყოფილი, როდესაც :other არის :value.',
    'different' => 'ველები :attribute და :other განსხვავებული უნდა იყოს.',
    'digits' => 'ველი :attribute უნდა იყოს :digits ციფრი.',
    'digits_between' => 'ველი :attribute უნდა იყოს :min-დან :max ციფრს შორის.',
    'dimensions' => 'ველს :attribute აქვს არასწორი სურათის ზომები.',
    'distinct' => 'ველში :attribute არის დუბლიკატის მნიშვნელობა.',
    'doesnt_contain' => 'ველი :attribute არ უნდა შეიცავდეს შემდეგთაგან რომელიმეს: :values.',
    'doesnt_end_with' => 'ველი :attribute არ უნდა მთავრდებოდეს შემდეგთაგან ერთ-ერთით: :values.',
    'doesnt_start_with' => 'ველი :attribute არ უნდა იწყებოდეს შემდეგთაგან ერთ-ერთით: :values.',
    'email' => ':attribute უნდა იყოს სწორი ელფოსტის მისამართი.',
    'encoding' => 'ველი :attribute უნდა იყოს დაკოდირებული :encoding-ით.',
    'ends_with' => 'ველი :attribute უნდა მთავრდებოდეს შემდეგთაგან ერთ-ერთით: :values.',
    'enum' => 'არჩეული :attribute არასწორია.',
    'exists' => 'არჩეული :attribute არასწორია.',
    'extensions' => 'ველი :attribute უნდა შეიცავდეს შემდეგ გაფართოებათაგან ერთ-ერთს: :values.',
    'file' => 'ველი :attribute უნდა იყოს ფაილი.',
    'filled' => 'ველში :attribute უნდა იყოს მნიშვნელობა.',
    'gt' => [
        'array' => 'ველში :attribute უნდა იყოს :value-ზე მეტი ელემენტი.',
        'file' => 'ველი :attribute უნდა იყოს :value კილობაიტზე მეტი.',
        'numeric' => 'ველი :attribute უნდა იყოს :value-ზე მეტი.',
        'string' => 'ველი :attribute უნდა იყოს :value სიმბოლოზე მეტი.',
    ],
    'gte' => [
        'array' => 'ველში :attribute უნდა იყოს :value ან მეტი ელემენტი.',
        'file' => ':attribute უნდა იყოს :value კილობაიტზე მეტი ან ტოლი.',
        'numeric' => ':attribute უნდა იყოს :value-ზე მეტი ან ტოლი.',
        'string' => 'ველი :attribute უნდა იყოს :value სიმბოლოზე მეტი ან ტოლი.',
    ],
    'hex_color' => 'ველი :attribute უნდა იყოს სწორი თექვსმეტობითი ფერი.',
    'image' => 'ველი :attribute უნდა იყოს სურათი.',
    'in' => 'არჩეული :attribute არასწორია.',
    'in_array' => 'ველი :attribute უნდა არსებობდეს :other-ში.',
    'in_array_keys' => 'ველი :attribute უნდა შეიცავდეს შემდეგ გასაღებთაგან ერთს მაინც: :values.',
    'integer' => 'ველი :attribute უნდა იყოს მთელი რიცხვი.',
    'ip' => 'ველი :attribute უნდა იყოს სწორი IP მისამართი.',
    'ipv4' => 'ველი :attribute უნდა იყოს სწორი IPv4 მისამართი.',
    'ipv6' => 'ველი :attribute უნდა იყოს სწორი IPv6 მისამართი.',
    'json' => 'ველი :attribute უნდა იყოს სწორი JSON სტრიქონი.',
    'list' => 'ველი :attribute უნდა იყოს სია.',
    'lowercase' => 'ველი :attribute უნდა იყოს პატარა ასოებით.',
    'lt' => [
        'array' => 'ველში :attribute უნდა იყოს :value-ზე ნაკლები ელემენტი.',
        'file' => 'ველი :attribute უნდა იყოს :value კილობაიტზე ნაკლები.',
        'numeric' => 'ველი :attribute უნდა იყოს :value-ზე ნაკლები.',
        'string' => ':attribute უნდა იყოს :value სიმბოლოზე ნაკლები.',
    ],
    'lte' => [
        'array' => 'ველში :attribute არ უნდა იყოს :value-ზე მეტი ელემენტი.',
        'file' => 'ველი :attribute უნდა იყოს :value კილობაიტზე ნაკლები ან ტოლი.',
        'numeric' => 'ველი :attribute უნდა იყოს :value-ზე ნაკლები ან ტოლი.',
        'string' => 'ველი :attribute უნდა იყოს :value სიმბოლოზე ნაკლები ან ტოლი.',
    ],
    'mac_address' => 'ველი :attribute უნდა იყოს სწორი MAC მისამართი.',
    'max' => [
        'array' => 'ველში :attribute არ უნდა იყოს :max-ზე მეტი ელემენტი.',
        'file' => 'ველი :attribute არ უნდა იყოს :max კილობაიტზე მეტი.',
        'numeric' => 'ველი :attribute არ უნდა იყოს :max-ზე მეტი.',
        'string' => 'ველი :attribute არ უნდა იყოს :max სიმბოლოზე მეტი.',
    ],
    'max_digits' => 'ველში :attribute არ უნდა იყოს :max-ზე მეტი ციფრი.',
    'mimes' => 'ველი :attribute უნდა იყოს :values ტიპის ფაილი.',
    'mimetypes' => 'ველი :attribute უნდა იყოს :values ტიპის ფაილი.',
    'min' => [
        'array' => 'ველში :attribute უნდა იყოს მინიმუმ :min ელემენტი.',
        'file' => 'ველი :attribute უნდა იყოს მინიმუმ :min კილობაიტი.',
        'numeric' => 'ველი :attribute უნდა იყოს მინიმუმ :min.',
        'string' => ':attribute უნდა იყოს მინიმუმ :min სიმბოლო.',
    ],
    'min_digits' => 'ველში :attribute უნდა იყოს მინიმუმ :min ციფრი.',
    'missing' => 'ველი :attribute არ უნდა არსებობდეს.',
    'missing_if' => 'ველი :attribute არ უნდა არსებობდეს, როდესაც :other არის :value.',
    'missing_unless' => 'ველი :attribute არ უნდა არსებობდეს, თუ :other არ არის :value.',
    'missing_with' => 'ველი :attribute არ უნდა არსებობდეს, როდესაც :values არსებობს.',
    'missing_with_all' => 'ველი :attribute არ უნდა არსებობდეს, როდესაც :values არსებობს.',
    'multiple_of' => 'ველი :attribute უნდა იყოს :value-ის ჯამი.',
    'not_in' => 'არჩეული :attribute არასწორია.',
    'not_regex' => 'ველის :attribute ფორმატი არასწორია.',
    'numeric' => 'ველი :attribute უნდა იყოს რიცხვი.',
    'password' => [
        'letters' => 'ველში :attribute უნდა იყოს მინიმუმ ერთი ასო.',
        'mixed' => 'ველში :attribute უნდა იყოს მინიმუმ ერთი დიდი და ერთი პატარა ასო.',
        'numbers' => 'ველში :attribute უნდა იყოს მინიმუმ ერთი ციფრი.',
        'symbols' => 'ველში :attribute უნდა იყოს მინიმუმ ერთი სიმბოლო.',
        'uncompromised' => 'მითითებული :attribute გამოჩნდა მონაცემთა გაჟონვაში. გთხოვთ, აირჩიოთ სხვა :attribute.',
    ],
    'present' => 'ველში :attribute უნდა არსებობდეს.',
    'present_if' => 'ველში :attribute უნდა არსებობდეს, როდესაც :other არის :value.',
    'present_unless' => 'ველში :attribute უნდა არსებობდეს, თუ :other არ არის :value.',
    'present_with' => 'ველში :attribute უნდა არსებობდეს, როდესაც :values არსებობს.',
    'present_with_all' => 'ველში :attribute უნდა არსებობდეს, როდესაც :values არსებობს.',
    'prohibited' => 'ველი :attribute აკრძალულია.',
    'prohibited_if' => 'ველი :attribute აკრძალულია, როდესაც :other არის :value.',
    'prohibited_if_accepted' => 'ველი :attribute აკრძალულია, როდესაც :other მიღებულია.',
    'prohibited_if_declined' => 'ველი :attribute აკრძალულია, როდესაც :other უარყოფილია.',
    'prohibited_unless' => 'ველი :attribute აკრძალულია, თუ :other არ არის :values-ში.',
    'prohibits' => 'ველი :attribute კრძალავს :other-ის არსებობას.',
    'regex' => 'ველის :attribute ფორმატი არასწორია.',
    'required' => ':attribute სავალდებულოა.',
    'required_array_keys' => 'ველში :attribute უნდა იყოს ჩანაწერები: :values.',
    'required_if' => 'ველი :attribute სავალდებულოა, როდესაც :other არის :value.',
    'required_if_accepted' => 'ველი :attribute სავალდებულოა, როდესაც :other მიღებულია.',
    'required_if_declined' => 'ველი :attribute სავალდებულოა, როდესაც :other უარყოფილია.',
    'required_unless' => 'ველი :attribute სავალდებულოა, თუ :other არ არის :values-ში.',
    'required_with' => 'ველი :attribute სავალდებულოა, როდესაც :values არსებობს.',
    'required_with_all' => 'ველი :attribute სავალდებულოა, როდესაც :values არსებობს.',
    'required_without' => 'ველი :attribute სავალდებულოა, როდესაც :values არ არსებობს.',
    'required_without_all' => 'ველი :attribute სავალდებულოა, როდესაც :values-დან არცერთი არ არსებობს.',
    'same' => 'ველი :attribute უნდა ემთხვეოდეს :other-ს.',
    'size' => [
        'array' => 'ველში :attribute უნდა იყოს :size ელემენტი.',
        'file' => 'ველი :attribute უნდა იყოს :size კილობაიტი.',
        'numeric' => 'ველი :attribute უნდა იყოს :size.',
        'string' => 'ველი :attribute უნდა იყოს :size სიმბოლო.',
    ],
    'starts_with' => 'ველი :attribute უნდა იწყებოდეს შემდეგთაგან ერთ-ერთით: :values.',
    'string' => 'ველი :attribute უნდა იყოს სტრიქონი.',
    'timezone' => 'ველი :attribute უნდა იყოს სწორი დროის სარტყელი.',
    'unique' => 'ველი :attribute უკვე დაკავებულია.',
    'uploaded' => 'ველი :attribute ვერ აიტვირთა.',
    'uppercase' => 'ველი :attribute უნდა იყოს დიდი ასოებით.',
    'url' => 'ველი :attribute უნდა იყოს სწორი URL.',
    'ulid' => 'ველი :attribute უნდა იყოს სწორი ULID.',
    'uuid' => 'ველი :attribute უნდა იყოს სწორი UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'name' => "სახელი",
        'email' => 'ელფოსტა',
        'password' => 'პაროლი',
        'login' => 'ველი'
    ],

];
