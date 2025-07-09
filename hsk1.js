const questions = [
    {
        question: "Аль нь 'Хайр' вэ?",
        answers: [
            { text: "五", correct: false},
            { text: "爱", correct: true},
            { text: "她", correct: false},
            { text: "我", correct: false},
        ]
    },
    {
        question: "Аль нь 'Найм' вэ?",
        answers: [
            { text: "八", correct: true},
            { text: "太", correct: false},
            { text: "了", correct: false},
            { text: "上", correct: false},
        ]
    },
    {
        question: "Аль нь 'Аав' вэ?",
        answers: [
            { text: "零", correct: false},
            { text: "谁", correct: false},
            { text: "爸爸", correct: true},
            { text: "她", correct: false},
        ]
    },
    {
        question: "Аль нь 'Аяга' вэ?",
        answers: [
            { text: "我", correct: false},
            { text: "呢", correct: false},
            { text: "几", correct: false},
            { text: "杯子", correct: true},
        ]
    },
    {
        question: "Аль нь 'Бээжин' вэ?",
        answers: [
            { text: "北京", correct: true},
            { text: "都", correct: false},
            { text: "些", correct: false},
            { text: "和", correct: false},
        ]
    },
    {
        question: "Аль нь 'Ширхэг' вэ?",
        answers: [
            { text: "本", correct: true},
            { text: "都", correct: false},
            { text: "些", correct: false},
            { text: "和", correct: false},
        ]
    },
    {
        question: "Аль нь 'Зүгээр' вэ?",
        answers: [
            { text: "十", correct: false},
            { text: "都", correct: false},
            { text: "些", correct: false},
            { text: "不客气", correct: true},
        ]
    },
    {
        question: "Аль нь 'Биш' вэ?",
        answers: [
            { text: "点", correct: false},
            { text: "都", correct: false},
            { text: "读", correct: false},
            { text: "不", correct: true},
        ]
    },
    {
        question: "Аль нь 'Хүнсний ногоо' вэ?",
        answers: [
            { text: "多", correct: false},
            { text: "多少", correct: false},
            { text: "儿子", correct: false},
            { text: "菜", correct: true},
        ]
    },
    {
        question: "Аль нь 'Цай' вэ?",
        answers: [
            { text: "大", correct: false},
            { text: "茶", correct: true},
            { text: "多", correct: false},
            { text: "读", correct: false},
        ]
    },
    {
        question: "Аль нь 'Идэх' вэ?",
        answers: [
            { text: "个", correct: false},            
            { text: "狗", correct: false},
            { text: "吃", correct: true},
            { text: "好", correct: false},
        ]
    },
    {
        question: "Аль нь 'Такси' вэ?", 
        answers: [            
            { text: "出租车", correct: true},
            { text: "回", correct: false},
            { text: "几", correct: false},
            { text: "会", correct: false},
        ]
    },
    {
        question: "Аль нь 'Утсаар ярих' вэ?",
        answers: [
            { text: "几", correct: false},
            { text: "家", correct: false},            
            { text: "打电话", correct: true},
            { text: "和", correct: false},
        ]
    },
    {
        question: "Аль нь 'Том' вэ?",
        answers: [
            { text: "叫", correct: false},
            { text: "家", correct: false},
            { text: "大", correct: true},
            { text: "会", correct: false},
        ]
    },
    {
        question: "Аль нь 'Нэр үг, тэмдэг нэр' вэ?",
        answers: [
            { text: "的", correct: true},
            { text: "很", correct: false},
            { text: "和", correct: false},
            { text: "好", correct: false},
        ]
    },
    {
        question: "Аль нь 'Цаг' вэ?",
        answers: [
            { text: "叫", correct: false},
            { text: "回", correct: false},
            { text: "很", correct: false},
            { text: "点", correct: true},
        ]
    },
    {
        question: "Аль нь 'Компьютер' вэ?",
        answers: [
            { text: "电脑", correct: true},
            { text: "号", correct: false},
            { text: "号", correct: false},
            { text: "号", correct: false},
        ]
    },
    {
        question: "Аль нь 'Телевиз' вэ?",
        answers: [
            { text: "号", correct: false},
            { text: "九", correct: false},
            { text: "几", correct: false},
            { text: "电视", correct: true},
        ]
    },
    {
        question: "Аль нь 'Кино' вэ?",
        answers: [
            { text: "和", correct: false},
            { text: "号", correct: false},
            { text: "电影", correct: true},
            { text: "家", correct: false},
        ]
    },
    {
        question: "Аль нь 'Эд юмс' вэ?",
        answers: [
            { text: "开", correct: false},
            { text: "东西", correct: true},
            { text: "九", correct: false},
            { text: "看", correct: false},
        ]
    },
    {
        question: "Аль нь 'Бүгд' вэ?",
        answers: [
            { text: "叫", correct: false},
            { text: "家", correct: false},
            { text: "都", correct: true},
            { text: "回", correct: false},
        ]
    },
    {
        question: "Аль нь 'Унших' вэ?",
        answers: [
            { text: "读", correct: true},
            { text: "和", correct: false},
            { text: "号", correct: false},
            { text: "喝", correct: false},
        ]
    },
    {
        question: "Аль нь 'Уучлаарай' вэ?",
        answers: [
            { text: "回", correct: false},
            { text: "会", correct: false},
            { text: "几", correct: false},
            { text: "对不起", correct: true},
        ]
    },
    {
        question: "Аль нь 'Хэд, хэдэн' вэ?",
        answers: [
            { text: "九", correct: false},
            { text: "多少", correct: true},
            { text: "开", correct: false},
            { text: "看", correct: false},
        ]
    },
    {
        question: "Аль нь 'Хүү' вэ?",
        answers: [
            { text: "块", correct: false},
            { text: "来", correct: false},
            { text: "了", correct: false},
            { text: "儿子", correct: true},
        ]
    },
    {
        question: "Аль нь 'Хоёр' вэ?",
        answers: [
            { text: "二", correct: true},
            { text: "冷", correct: false},
            { text: "里", correct: false},
            { text: "六", correct: false},
        ]
    },
    {
        question: "Аль нь 'Зоогийн Газар' вэ?",
        answers: [
            { text: "吗", correct: false},
            { text: "买", correct: false},
            { text: "猫", correct: false},
            { text: "饭店", correct: true},
        ]
    },
    {
        question: "Аль нь 'Нисэх Онгоц' вэ?",
        answers: [
            { text: "朋友", correct: false},
            { text: "朋友", correct: false},
            { text: "飞机", correct: true},
            { text: "苹果", correct: false},
        ]
    },
    {
        question: "Аль нь 'Минут' вэ?",
        answers: [
            { text: "前面", correct: false},
            { text: "分钟", correct: true},
            { text: "女儿", correct: false},
            { text: "漂亮", correct: false},
        ]
    },
    {
        question: "Аль нь 'Баяртай' вэ?",
        answers: [
            { text: "前面", correct: false},
            { text: "认识", correct: false},
            { text: "商店", correct: false},
            { text: "高兴", correct: true},
        ]
    },
    {
        question: "Аль нь 'Ширхэг' вэ?",
        answers: [
            { text: "个", correct: true},
            { text: "三", correct: false},
            { text: "人", correct: false},
            { text: "钱", correct: false},
        ]
    },
    {
        question: "Аль нь 'Ажил' вэ?",
        answers: [
            { text: "认识", correct: false},
            { text: "工作", correct: true},
            { text: "苹果", correct: false},
            { text: "漂亮", correct: false},
        ]
    },
    {
        question: "Аль нь 'Нохой' вэ?",
        answers: [
            { text: "人", correct: false},
            { text: "七", correct: false},
            { text: "年", correct: false},
            { text: "狗", correct: true},
        ]
    },
    {
        question: "Аль нь 'Хятад хэл' вэ?",
        answers: [
            { text: "汉语", correct: true},
            { text: "商店", correct: false},
            { text: "上午", correct: false},
            { text: "什么", correct: false},
        ]
    },
    {
        question: "Аль нь 'Сайн' вэ?",
        answers: [
            { text: "少", correct: false},
            { text: "谁", correct: false},
            { text: "十", correct: false},
            { text: "好", correct: true},
        ]
    },
    {
        question: "Аль нь 'Өдөр' вэ?",
        answers: [
            { text: "是", correct: false},
            { text: "号", correct: true},
            { text: "谁", correct: false},
            { text: "是", correct: false},
        ]
    },
    {
        question: "Аль нь 'Уух' вэ?",
        answers: [
            { text: "说", correct: false},
            { text: "四", correct: false},
            { text: "喝", correct: true},
            { text: "岁", correct: false},
        ]
    },
    {
        question: "Аль нь 'Ба, Болон' вэ?",
        answers: [
            { text: "的", correct: false},
            { text: "和", correct: true},
            { text: "一", correct: false},            
            { text: "是", correct: false},
        ]
    },
    {
        question: "Аль нь 'Буцах, Явах' вэ?",
        answers: [
            { text: "回", correct: true},
            { text: "在", correct: false},
            { text: "了", correct: false},
            { text: "有", correct: false},
        ]
    },
    {
        question: "Аль нь 'Чадах' вэ?",
        answers: [
            { text: "人", correct: false},
            { text: "会", correct: true},
            { text: "不", correct: false},            
            { text: "国", correct: false},
        ]
    },
    {
        question: "Аль нь 'Хэд, Хэдэн' вэ?",
        answers: [
            { text: "几", correct: true},
            { text: "中", correct: false},
            { text: "大", correct: false},
            { text: "年", correct: false},
        ]
    },
    {
        question: "Аль нь 'Гэр бүл' вэ?",
        answers: [
            { text: "上", correct: false},
            { text: "这", correct: false},
            { text: "个", correct: false},
            { text: "家", correct: true},
        ]
    },
    {
        question: "Аль нь 'Нэрлэх' вэ?",
        answers: [
            { text: "我", correct: false},
            { text: "叫", correct: true},
            { text: "和", correct: false},
            { text: "日", correct: false},
        ]
    },
    {
        question: "Аль нь 'Өнөөдөр' вэ?",
        answers: [
            { text: "时", correct: false},
            { text: "会", correct: false},
            { text: "和", correct: false},
            { text: "今天", correct: true},
        ]
    },
    {
        question: "Аль нь 'Ес' вэ?",
        answers: [
            { text: "九", correct: true},
            { text: "出", correct: false},
            { text: "来", correct: false},
            { text: "他", correct: false},
        ]
    },
    {
        question: "Аль нь 'Жолоодох' вэ?",
        answers: [
            { text: "家", correct: false},
            { text: "开", correct: true},
            { text: "生", correct: false},
            { text: "们", correct: false},
        ]
    },
    {
        question: "Аль нь 'Харах' вэ?",
        answers: [
            { text: "对", correct: false},
            { text: "期", correct: false},
            { text: "月", correct: false},
            { text: "看", correct: true},
        ]
    },
    {
        question: "Аль нь 'Харах, Үзэх' вэ?",
        answers: [
            { text: "能本", correct: false},
            { text: "看见", correct: true},
            { text: "学现", correct: false},
            { text: "说作", correct: false},
        ]
    },
    {
        question: "Аль нь 'Юань' вэ?",
        answers: [
            { text: "块", correct: true},
            { text: "电", correct: false},
            { text: "前", correct: false},
            { text: "下", correct: false},
        ]
    },
    {
        question: "Аль нь 'Ирэх' вэ?",
        answers: [
            { text: "开", correct: false},
            { text: "来", correct: true},
            { text: "天", correct: false},
            { text: "北", correct: false},
        ]
    },
    {
        question: "Аль нь 'Багш' вэ?",
        answers: [
            { text: "京分", correct: false},
            { text: "高都", correct: false},
            { text: "工子", correct: false},
            { text: "老师", correct: true},
        ]
    },
    {
        question: "Аль нь '-лаа*4' вэ?",
        answers: [
            { text: "小", correct: false},
            { text: "了", correct: true},
            { text: "面", correct: false},
            { text: "机", correct: false},
        ]
    },
    {
        question: "Аль нь 'Хүйтэн' вэ?",
        answers: [
            { text: "冷", correct: true},
            { text: "车", correct: false},
            { text: "关", correct: false},
            { text: "名", correct: false},
        ]
    },
    {
        question: "Аль нь 'дотор, -д, -т' вэ?",
        answers: [
            { text: "里", correct: false},
            { text: "好", correct: false},
            { text: "好", correct: false},
            { text: "里", correct: true},
        ]
    },
    {
        question: "Аль нь 'зургаа' вэ?",
        answers: [
            { text: "没", correct: false},
            { text: "六", correct: true},
            { text: "明", correct: false},
            { text: "看", correct: false},
        ]
    },
    {
        question: "Аль нь '-уу, -үү, бэ, вэ' вэ?",
        answers: [
            { text: "吗", correct: true},
            { text: "点", correct: false},
            { text: "起", correct: false},
            { text: "星", correct: false},
        ]
    },
    {
        question: "Аль нь 'ээж' вэ?",
        answers: [
            { text: "些三", correct: false},
            { text: "很去", correct: false},
            { text: "商今", correct: false},
            { text: "妈妈", correct: true},
        ]
    },
    {
        question: "Аль нь 'авах, худалдан авах' вэ?",
        answers: [
            { text: "买", correct: true},
            { text: "么", correct: false},
            { text: "样", correct: false},
            { text: "那", correct: false},
        ]
    },
    {
        question: "Аль нь 'Нохой' вэ?",
        answers: [
            { text: "东", correct: false},
            { text: "想", correct: false},
            { text: "西", correct: false},
            { text: "猫", correct: true},
        ]
    },
    {
        question: "Аль нь 'зүгээр ээ, хамаагүй' вэ?",
        answers: [
            { text: "水影话", correct: false},
            { text: "没关系", correct: true},
            { text: "些视你", correct: false},
            { text: "和果老", correct: false},
        ]
    },
    {
        question: "Аль нь 'байхгүй' вэ?",
        answers: [
            { text: "没有", correct: true},
            { text: "二院", correct: false},
            { text: "女她", correct: false},
            { text: "认打", correct: false},
        ]
    },
    {
        question: "Аль нь 'будаа' вэ?",
        answers: [
            { text: "做", correct: false},
            { text: "先", correct: false},
            { text: "和", correct: false},
            { text: "米饭", correct: true},
        ]
    },
    {
        question: "Аль нь 'нэр' вэ?",
        answers: [
            { text: "少回", correct: false},
            { text: "名字", correct: true},
            { text: "系四", correct: false},
            { text: "气十", correct: false},
        ]
    },
    {
        question: "Аль нь 'маргааш' вэ?",
        answers: [
            { text: "服再", correct: false},
            { text: "儿住", correct: false},
            { text: "什书", correct: false},
            { text: "明天", correct: true},
        ]
    },
    {
        question: "Аль нь 'аль' вэ?",
        answers: [
            { text: "哪", correct: true},
            { text: "米", correct: false},
            { text: "师", correct: false},
            { text: "五", correct: false},
        ]
    },
    {
        question: "Аль нь 'хаана' вэ?",
        answers: [
            { text: "见", correct: false},
            { text: "客", correct: false},
            { text: "热", correct: false},
            { text: "哪儿", correct: true},
        ]
    },
    {
        question: "Аль нь 'уу, үү, бэ, вэ' вэ?",
        answers: [
            { text: "呢", correct: true},
            { text: "买", correct: false},
            { text: "医", correct: false},
            { text: "爱", correct: false},
        ]
    },
    {
        question: "Аль нь 'болох, чадах' вэ?",
        answers: [
            { text: "太", correct: false},
            { text: "能", correct: true},
            { text: "校", correct: false},
            { text: "昨", correct: false},
        ]
    },
    {
        question: "Аль нь 'чи' вэ?",
        answers: [
            { text: "站", correct: false},
            { text: "觉", correct: false},
            { text: "候", correct: false},
            { text: "你", correct: true},
        ]
    },
    {
        question: "Аль нь 'жил, он' вэ?",
        answers: [
            { text: "飞", correct: false},
            { text: "年", correct: true},
            { text: "钱", correct: false},
            { text: "字", correct: false},
        ]
    },
    {
        question: "Аль нь 'охин' вэ?",
        answers: [
            { text: "岁友", correct: false},
            { text: "请识", correct: false},
            { text: "火听", correct: false},
            { text: "女儿", correct: true},
        ]
    },
    {
        question: "Аль нь 'найз' вэ?",
        answers: [
            { text: "朋友", correct: true},
            { text: "兴习", correct: false},
            { text: "语脑", correct: false},
            { text: "和六", correct: false},
        ]
    },
    {
        question: "Аль нь 'үзэсгэлэнтэй' вэ?",
        answers: [
            { text: "店午", correct: false},
            { text: "漂亮", correct: true},
            { text: "写喜", correct: false},
            { text: "读馆", correct: false},
        ]
    },
    {
        question: "Аль нь 'алим' вэ?",
        answers: [
            { text: "欢怎", correct: false},
            { text: "吃些", correct: false},
            { text: "杯钟", correct: false},
            { text: "苹果", correct: true},
        ]
    },
    {
        question: "Аль нь 'долоо' вэ?",
        answers: [
            { text: "七", correct: true},
            { text: "租", correct: false},
            { text: "块", correct: false},
            { text: "谁", correct: false},
        ]
    },
    {
        question: "Аль нь 'урд, өмнө' вэ?",
        answers: [
            { text: "吗叫", correct: false},
            { text: "些亮", correct: false},
            { text: "前面", correct: true},
            { text: "哪朋", correct: false},
        ]
    },
    {
        question: "Аль нь 'мөнгө' вэ?",
        answers: [
            { text: "钱", correct: true},
            { text: "妈", correct: false},
            { text: "坐", correct: false},
            { text: "汉", correct: false},
        ]
    },
    {
        question: "Аль нь '-аараа*4' вэ?",
        answers: [
            { text: "饭", correct: false},
            { text: "衣", correct: false},
            { text: "雨", correct: false},
            { text: "请", correct: true},
        ]
    },
    {
        question: "Аль нь 'явах' вэ?",
        answers: [
            { text: "九", correct: false},
            { text: "冷", correct: false},
            { text: "和", correct: false},
            { text: "去", correct: true},
        ]
    },
    {
        question: "Аль нь 'халуун' вэ?",
        answers: [
            { text: "热", correct: true},
            { text: "七", correct: false},
            { text: "姐", correct: false},
            { text: "谢", correct: false},
        ]
    },
    {
        question: "Аль нь 'хүн' вэ?",
        answers: [
            { text: "菜", correct: false},
            { text: "零", correct: false},
            { text: "爸", correct: false},
            { text: "人", correct: true},
        ]
    },
    {
        question: "Аль нь 'танилцах' вэ?",
        answers: [
            { text: "认识", correct: true},
            { text: "睡喝", correct: false},
            { text: "茶猫", correct: false},
            { text: "桌狗", correct: false},
        ]
    },
    {
        question: "Аль нь 'гурав' вэ?",
        answers: [
            { text: "漂", correct: false},
            { text: "椅", correct: false},
            { text: "喂", correct: false},
            { text: "三", correct: true},
        ]
    },
    {
        question: "Аль нь 'дэлгүүр' вэ?",
        answers: [
            { text: "苹的", correct: false},
            { text: "商店", correct: true},
            { text: "一是", correct: false},
            { text: "在了", correct: false},
        ]
    },
    {
        question: "Аль нь 'дээр' вэ?",
        answers: [
            { text: "有", correct: false},
            { text: "人", correct: false},
            { text: "不", correct: false},
            { text: "上", correct: true},
        ]
    },
    {
        question: "Аль нь 'үдээс өмнө' вэ?",
        answers: [
            { text: "上午", correct: true},
            { text: "国中", correct: false},
            { text: "大年", correct: false},
            { text: "上这", correct: false},
        ]
    },
    {
        question: "Аль нь 'бага' вэ?",
        answers: [
            { text: "个", correct: false},
            { text: "和", correct: false},
            { text: "日", correct: false},
            { text: "少", correct: true},
        ]
    },
    {
        question: "Аль нь 'хэн' вэ?",
        answers: [
            { text: "谁", correct: true},
            { text: "时", correct: false},
            { text: "会", correct: false},
            { text: "出", correct: false},
        ]
    },
    {
        question: "Аль нь 'юу' вэ?",
        answers: [
            { text: "来", correct: false},
            { text: "他", correct: false},
            { text: "家", correct: false},
            { text: "什么", correct: true},
        ]
    },
    {
        question: "Аль нь 'арав' вэ?",
        answers: [
            { text: "生", correct: false},
            { text: "们", correct: false},
            { text: "对", correct: false},
            { text: "十", correct: true},
        ]
    },
    {
        question: "Аль нь 'цаг' вэ?",
        answers: [
            { text: "时候", correct: true},
            { text: "期月", correct: false},
            { text: "多些", correct: false},
            { text: "能本", correct: false},
        ]
    },
    {
        question: "Аль нь 'бол' вэ?",
        answers: [
            { text: "学", correct: false},
            { text: "是", correct: true},
            { text: "现", correct: false},
            { text: "说", correct: false},
        ]
    },
    {
        question: "Аль нь 'ном' вэ?",
        answers: [
            { text: "书", correct: true},
            { text: "作", correct: false},
            { text: "电", correct: false},
            { text: "前", correct: false},
        ]
    },
    {
        question: "Аль нь 'ус' вэ?",
        answers: [
            { text: "下", correct: false},
            { text: "开", correct: false},
            { text: "天", correct: false},
            { text: "水", correct: true},
        ]
    },
    {
        question: "Аль нь 'жимс' вэ?",
        answers: [
            { text: "水果", correct: true},
            { text: "北京", correct: false},
            { text: "分高", correct: false},
            { text: "都工", correct: false},
        ]
    },
    {
        question: "Аль нь 'унтах' вэ?",
        answers: [
            { text: "子小", correct: false},
            { text: "睡觉", correct: true},
            { text: "面机", correct: false},
            { text: "同车", correct: false},
        ]
    },
    {
        question: "Аль нь 'ярих' вэ?",
        answers: [
            { text: "关", correct: false},
            { text: "说", correct: true},
            { text: "名", correct: false},
            { text: "里", correct: false},
        ]
    },
    {
        question: "Аль нь 'дөрөв' вэ?",
        answers: [
            { text: "好", correct: false},
            { text: "没", correct: false},
            { text: "明", correct: false},
            { text: "四", correct: true},
        ]
    },
    {
        question: "Аль нь 'нас' вэ?",
        answers: [
            { text: "岁", correct: true},
            { text: "看", correct: false},
            { text: "点", correct: false},
            { text: "和", correct: false},
        ]
    },
    {
        question: "Аль нь 'тэр эрэгтэй' вэ?",
        answers: [
            { text: "起", correct: false},
            { text: "他", correct: true},
            { text: "星", correct: false},
            { text: "些", correct: false},
        ]
    },
    {
        question: "Аль нь 'тэр эмэгтэй' вэ?",
        answers: [
            { text: "三", correct: false},
            { text: "很", correct: false},
            { text: "去", correct: false},
            { text: "她", correct: true},
        ]
    },
    {
        question: "Аль нь 'маш, их' вэ?",
        answers: [
            { text: "商", correct: false},
            { text: "今", correct: false},
            { text: "太", correct: true},
            { text: "么", correct: false},
        ]
    },
    {
        question: "Аль нь 'цаг агаар' вэ?",
        answers: [
            { text: "样那", correct: false},
            { text: "天气", correct: true},
            { text: "东想", correct: false},
            { text: "西水", correct: false},
        ]
    },
    {
        question: "Аль нь 'сонсох' вэ?",
        answers: [
            { text: "听", correct: true},
            { text: "影", correct: false},
            { text: "话", correct: false},
            { text: "视", correct: false},
        ]
    },
    {
        question: "Аль нь 'ангийнхан' вэ?",
        answers: [
            { text: "你果", correct: false},
            { text: "老二", correct: false},
            { text: "院女", correct: false},
            { text: "同学", correct: true},
        ]
    },
    {
        question: "Аль нь 'байна уу' вэ?",
        answers: [
            { text: "她", correct: false},
            { text: "喂", correct: true},
            { text: "认", correct: false},
            { text: "打", correct: false},
        ]
    },
    {
        question: "Аль нь 'би' вэ?",
        answers: [
            { text: "我", correct: true},
            { text: "做", correct: false},
            { text: "先", correct: false},
            { text: "少", correct: false},
        ]
    },
    {
        question: "Аль нь 'бид' вэ?",
        answers: [
            { text: "回系", correct: false},
            { text: "四气", correct: false},
            { text: "十服", correct: false},
            { text: "我们", correct: true},
        ]
    },
    {
        question: "Аль нь 'тав' вэ?",
        answers: [
            { text: "再", correct: false},
            { text: "五", correct: true},
            { text: "儿", correct: false},
            { text: "住", correct: false},
        ]
    },
    {
        question: "Аль нь 'дуртай' вэ?",
        answers: [
            { text: "什书", correct: false},
            { text: "米师", correct: false},
            { text: "五见", correct: false},
            { text: "喜欢", correct: true},
        ]
    },
    {
        question: "Аль нь 'дор' вэ?",
        answers: [
            { text: "客", correct: false},
            { text: "下", correct: true},
            { text: "热", correct: false},
            { text: "买", correct: false},
        ]
    },
    {
        question: "Аль нь 'үдээс хойш' вэ?",
        answers: [
            { text: "下午", correct: true},
            { text: "医爱", correct: false},
            { text: "太校", correct: false},
            { text: "昨站", correct: false},
        ]
    },
    {
        question: "Аль нь 'бороо орох' вэ?",
        answers: [
            { text: "觉候", correct: false},
            { text: "飞钱", correct: false},
            { text: "字和", correct: false},
            { text: "下雨", correct: true},
        ]
    },
    {
        question: "Аль нь 'ноёнтон, гуай' вэ?",
        answers: [
            { text: "先生", correct: true},
            { text: "岁友", correct: false},
            { text: "请识", correct: false},
            { text: "火听", correct: false},
        ]
    },
    {
        question: "Аль нь 'одоо' вэ?",
        answers: [
            { text: "兴习", correct: false},
            { text: "语脑", correct: false},
            { text: "六店", correct: false},
            { text: "现在", correct: true},
        ]
    },
    {
        question: "Аль нь 'бодох, хүсэх' вэ?",
        answers: [
            { text: "想", correct: true},
            { text: "午", correct: false},
            { text: "写", correct: false},
            { text: "喜", correct: false},
        ]
    },
    {
        question: "Аль нь 'бага' вэ?",
        answers: [
            { text: "读", correct: false},
            { text: "馆", correct: false},
            { text: "欢", correct: false},
            { text: "小", correct: true},
        ]
    },
    {
        question: "Аль нь 'авхай' вэ?",
        answers: [
            { text: "小姐", correct: true},
            { text: "怎吃", correct: false},
            { text: "杯钟", correct: false},
            { text: "八呢", correct: false},
        ]
    },
    {
        question: "Аль нь 'хэдэн, хэсэг' вэ?",
        answers: [
            { text: "租", correct: false},
            { text: "块", correct: false},
            { text: "谁", correct: false},
            { text: "些", correct: true},
        ]
    },
    {
        question: "Аль нь 'баярлалаа' вэ?",
        answers: [
            { text: "吗叫", correct: false},
            { text: "谢谢", correct: true},
            { text: "些亮 ", correct: false},
            { text: "杯钟", correct: false},
        ]
    },
    {
        question: "Аль нь 'долоо хоног' вэ?",
        answers: [
            { text: "八呢", correct: false},
            { text: "租块", correct: false},
            { text: "星期", correct: true},
            { text: "谁吗", correct: false},
        ]
    },
    {
        question: "Аль нь 'сурагч, оюутан' вэ?",
        answers: [
            { text: "学生", correct: true},
            { text: "叫亮", correct: false},
            { text: "哪朋", correct: false},
            { text: "妈坐", correct: false},
        ]
    },
    {
        question: "Аль нь 'сурах' вэ?",
        answers: [
            { text: "汉饭", correct: false},
            { text: "衣雨", correct: false},
            { text: "九冷", correct: false},
            { text: "学习", correct: true},
        ]
    },
    {
        question: "Аль нь 'сургууль' вэ?",
        answers: [
            { text: "学校", correct: true},
            { text: "七姐", correct: false},
            { text: "谢菜", correct: false},
            { text: "零爸", correct: false},
        ]
    },
    {
        question: "Аль нь 'нэг' вэ?",
        answers: [
            { text: "睡", correct: false},
            { text: "喝", correct: false},
            { text: "茶", correct: false},
            { text: "一", correct: true},
        ]
    },
    {
        question: "Аль нь 'бага' вэ?",
        answers: [
            { text: "猫", correct: false},
            { text: "一点儿", correct: true},
            { text: "桌", correct: false},
            { text: "狗", correct: false},
        ]
    },
    {
        question: "Аль нь 'эмч' вэ?",
        answers: [
            { text: "漂椅", correct: false},
            { text: "喂苹", correct: false},
            { text: "医生", correct: true},
            { text: "的一", correct: false},
        ]
    },
    {
        question: "Аль нь 'эмнэлэг' вэ?",
        answers: [
            { text: "医院", correct: true},
            { text: "是在", correct: false},
            { text: "了有", correct: false},
            { text: "人不", correct: false},
        ]
    },
    {
        question: "Аль нь 'хувцас' вэ?",
        answers: [
            { text: "国中", correct: false},
            { text: "大年", correct: false},
            { text: "上这", correct: false},
            { text: "衣服", correct: true},
        ]
    },
    {
        question: "Аль нь 'сандал' вэ?",
        answers: [
            { text: "椅子", correct: true},
            { text: "个我", correct: false},
            { text: "和日", correct: false},
            { text: "时会", correct: false},
        ]
    },
    {
        question: "Аль нь 'байх' вэ?",
        answers: [
            { text: "出他", correct: false},
            { text: "来些", correct: false},
            { text: "有家", correct: true},
            { text: "生们", correct: false},
        ]
    },
    {
        question: "Аль нь 'сар' вэ?",
        answers: [
            { text: "对", correct: false},
            { text: "月", correct: true},
            { text: "期", correct: false},
            { text: "和", correct: false},
        ]
    },
    {
        question: "Аль нь 'баяртай' вэ?",
        answers: [
            { text: "月多", correct: false},
            { text: "能本", correct: false},
            { text: "学现", correct: false},
            { text: "再见", correct: true},
        ]
    },
    {
        question: "Аль нь '-д, -т, орших' вэ?",
        answers: [
            { text: "说", correct: false},
            { text: "在", correct: true},
            { text: "作", correct: false},
            { text: "电", correct: false},
        ]
    },
    {
        question: "Аль нь 'юугаар, яаж' вэ?",
        answers: [
            { text: "怎么", correct: true},
            { text: "前下", correct: false},
            { text: "开天", correct: false},
            { text: "北京", correct: false},
        ]
    },
    {
        question: "Аль нь 'ямар байна' вэ?",
        answers: [
            { text: "分高都", correct: false},
            { text: "工子小", correct: false},
            { text: "面机同", correct: false},
            { text: "怎么样", correct: true},
        ]
    },
    {
        question: "Аль нь 'энд' вэ?",
        answers: [
            { text: "车", correct: false},
            { text: "关", correct: false},
            { text: "名", correct: false},
            { text: "这", correct: true},
        ]
    },
    {
        question: "Аль нь 'хятад' вэ?",
        answers: [
            { text: "中国", correct: true},
            { text: "里好", correct: false},
            { text: "没明", correct: false},
            { text: "看点", correct: false},
        ]
    },
    {
        question: "Аль нь 'үд' вэ?",
        answers: [
            { text: "起星", correct: false},
            { text: "中午", correct: true},
            { text: "些三", correct: false},
            { text: "很去", correct: false},
        ]
    },
    {
        question: "Аль нь 'амьдрах' вэ?",
        answers: [
            { text: "商", correct: false},
            { text: "今", correct: false},
            { text: "么", correct: false},
            { text: "住", correct: true},
        ]
    },
    {
        question: "Аль нь 'ширээ' вэ?",
        answers: [
            { text: "样那", correct: false},
            { text: "东想", correct: false},
            { text: "桌子", correct: true},
            { text: "西水", correct: false},
        ]
    },
    {
        question: "Аль нь 'бичиг' вэ?",
        answers: [
            { text: "字", correct: true},
            { text: "影", correct: false},
            { text: "话", correct: false},
            { text: "视", correct: false},
        ]
    },
    {
        question: "Аль нь 'өчигдөр' вэ?",
        answers: [
            { text: "你果", correct: false},
            { text: "昨天", correct: true},
            { text: "老二", correct: false},
            { text: "院女", correct: false},
        ]
    },
    {
        question: "Аль нь 'суух' вэ?",
        answers: [
            { text: "她", correct: false},
            { text: "认", correct: false},
            { text: "打", correct: false},
            { text: "做", correct: true},
        ]
    },
    {
        question: "Аль нь 'хийх' вэ?",
        answers: [
            { text: "做", correct: false},
            { text: "坐", correct: true},
            { text: "先", correct: false},
            { text: "少", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; 
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Та ${score} асуултны ${questions.length}-д нь зөв хариуллаа! Улам их хичээгээрэй! Таньд амжилт хүсье! Хэлтэй бол хөлтэй. Монгол ардын зүйр цэцэн үгс. Эзэн хичээвэл заяа хичээнэ. Ажил хийвэл дуустал, давс хийвэл уустал.`;
    nextButton.innerHTML = "Дахин эхлүүлэх";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
